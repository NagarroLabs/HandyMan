import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../shared/context/auth-context';
import EditHandyManProfileForm from '../components/EditHandyManProfileForm';
import { useHttpClient } from '../shared/hooks/http-hook';

import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable */

toast.configure();
function EditHandyManProfilePage() {
    const { sendRequest } = useHttpClient();
    const [user, setUser] = useState();
    const [handyMan, setHandyMan] = useState({
        id: null,
        areaOfInterest: ' ',
        skills: ' ',
        spokenLanguages: ' ',
        city: ' ',
        country: ' ',
        address: ' ',
        companyName: ' ',
        companyAddress: ' ',
        companyWebsite: ' ',
        companyPhone: ' ',
        experience: ' '
    });

    const auth = useContext(AuthContext);
    const userId = auth.userId;
    let history = useHistory();

    useEffect(() => {
        async function getHandyManInfo() {
            try {
                const url = 'http://localhost:3001/api/handymen/' + userId;
                const responseData = await sendRequest(url);
                setHandyMan(responseData.handyMan);
            } catch (err) {
                console.log(err);
            }
        }

        // async function getUserInfo() {
        //   try {
        //     const url = "http://localhost:3001/api/users/" + userId;
        //     const responseData = await sendRequest(url);
        //     setUser(responseData.user);
        //     console.log("handyman: " + user.handyManId);
        //     getHandyManInfo();
        //   } catch (err) {}
        // }

        // getUserInfo();
        getHandyManInfo();
    }, []);

    function handleChange({ target }) {
        setHandyMan({
            ...handyMan,
            [target.name]: target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const url = 'http://localhost:3001/api/handymen/editHandyMan/';
            const responseData = await sendRequest(
                url,
                'PATCH',
                JSON.stringify({
                    areaOfInterest: handyMan.areaOfInterest,
                    skills: handyMan.skills,
                    spokenLanguages: handyMan.spokenLanguages,
                    city: handyMan.city,
                    country: handyMan.country,
                    address: handyMan.address,
                    companyName: handyMan.companyName,
                    companyAddress: handyMan.companyAddress,
                    companyWebsite: handyMan.companyWebsite,
                    companyPhone: handyMan.companyPhone,
                    experience: handyMan.experience
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: 'JWT ' + auth.token
                }
            );
            auth.login(responseData.userId, responseData.token);
            toast.success('HandyMan account successfully updated!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
            history.push('/');
        } catch (err) {
            console.log(err);
            toast.error('Something went wrong.', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
            });
        }
    }

    return (
        <>
            <EditHandyManProfileForm
                handyMan={handyMan}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default EditHandyManProfilePage;
