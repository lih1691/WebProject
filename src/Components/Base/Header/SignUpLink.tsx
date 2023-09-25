import React from "react";
import Sign from "./Sign";
function SignUpLink() {
    return (
        <Sign to={"/Auth/SignUp"}>
            Sign Up
        </Sign>
    );
}

export default SignUpLink;