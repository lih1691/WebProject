import React from "react";
import Sign from "./Sign";

const SignUpLink: React.FC = () => (
    <Sign to={"/Auth/SignUp"}>
        Sign Up
    </Sign>
)

export default SignUpLink;