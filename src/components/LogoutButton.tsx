import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FiLogOut } from "react-icons/fi";

const LogoutnButton = () => {
    const { logout } = useAuth0();

    return <FiLogOut onClick={() => logout()} />;
};

export default LogoutnButton;