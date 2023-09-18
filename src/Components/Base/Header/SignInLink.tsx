import React from "react";
import Sign from "./Sign";

const SignInLink: React.FC = () => (
    <Sign to={"/Auth/SignIn"}>
        Sign In
    </Sign>
)

export default SignInLink;