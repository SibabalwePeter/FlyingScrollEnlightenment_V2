import React from "react";
import { FiLogIn } from 'react-icons/fi'

import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <FiLogIn onClick={() => loginWithRedirect()}/>;
};

export default LoginButton;