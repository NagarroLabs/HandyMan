import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';

import UpgradeToHandyManForm from '../components/UpgradeToHandyManForm';
import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../shared/hooks/http-hook';

import 'react-toastify/dist/ReactToastify.css';

/* eslint-disable */

toast.configure();
function UpgradeToHandyManPage() {
    const [user, setUser] = useState({
        id: null,
        areaOfInterest: '',
        skills: '',
        spokenLanguages: '',
        city: '',
        country: '',
        address: '',
        companyName: '',
        companyAddress: '',
        companyWebsite: '',
        companyPhone: '',
        experience: ''
    });
    let history = useHistory();

    function handleChange({ target }) {
        setUser({
            ...user,
            [target.name]: target.value
        });
    }

    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                'http://localhost:3001/api/handymen/upgradeToHandyMan',
                'POST',
                JSON.stringify({
                    areaOfInterest: user.areaOfInterest,
                    skills: user.skills,
                    spokenLanguages: user.spokenLanguages,
                    city: user.city,
                    country: user.country,
                    address: user.address,
                    companyName: user.companyName,
                    companyAddress: user.companyAddress,
                    companyWebsite: user.companyWebsite,
                    companyPhone: user.companyPhone,
                    experience: user.experience
                }),
                {
                    'Content-Type': 'application/json',
                    Authorization: `JWT ${auth.token}`
                }
            );
            auth.login(responseData.userId, responseData.token);
            toast.success('Account successfully updated to HandyMan!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000
            });
            history.push("/");
        } catch (err) {
            console.log(err);
            toast.error('Email or username already taken!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: false
            });
        }
    }

    return (
        <>
            <UpgradeToHandyManForm
                user={user}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
        </>
    );
}

export default UpgradeToHandyManPage;
