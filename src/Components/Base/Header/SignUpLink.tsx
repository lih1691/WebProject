import React from "react";
import { useAppSelector } from "@redux/hook";
import Sign from "./Sign";


function SignUpLink({currentPageName}: {currentPageName: string}) {
    return (
        <Sign to={"/Auth/SignUp"} $pageName={currentPageName}>
            Sign Up
        </Sign>
    );
}

export default SignUpLink;