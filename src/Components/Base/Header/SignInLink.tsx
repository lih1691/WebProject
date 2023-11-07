import React from "react";
import Sign from "./Sign";

function SignInLink({currentPageName}: {currentPageName: string}) {
    return (
        <Sign to={"/Auth/SignIn"} $pageName={currentPageName}>
            Sign In
        </Sign>
    )
}

export default SignInLink;