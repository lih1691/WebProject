import React from "react";
import Sign from "./Sign";

function SignInLink() {
    return (
        <Sign to={"/Auth/SignIn"}>
            Sign In
        </Sign>
    )
}

export default SignInLink;