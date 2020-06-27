import React, { useState, useContext } from "react";
import { connect } from "react-redux";

import LoginForm from '../components/LoginForm';
import { useHttpClient } from '../shared/hooks/http-hook';
import { AuthContext } from '../shared/context/auth-context';
import { setLoggedIn } from '../redux/actions';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
function LoginPage(props) {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();

    function handleChange({ target }) {
        setLoginInfo({
            ...loginInfo,
            [target.name]: target.value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const responseData = await sendRequest(
                'http://localhost:3001/api/users/login',
                'POST',
                JSON.stringify({
                    email: loginInfo.email,
                    password: loginInfo.password
                }),
                {
                    'Content-Type': 'application/json'
                }
            );
      auth.login(responseData.userId, responseData.token);
      props.setLoggedIn(true);
      toast.success("Logged in successfully!", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (err) {
      console.log("error" + err);
      toast.error("Invalid email or password!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
    }
  }

  return (
    <>
      <LoginForm
        loginInfo={loginInfo}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return { isLoggedIn: state.isLoggedIn };
};

export default connect(mapStateToProps, { setLoggedIn })(LoginPage);
