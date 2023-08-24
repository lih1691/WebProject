import React  from 'react';
import Header from "../../Components/Base/Header";
import SignIn from "../../Components/Base/Header/SignIn";
import SignUp from "../../Components/Base/Header/SignUp";

const liStyle = {
    listStyle: "none",
    float: "left",
};

const HeaderContainer = () => {
    return (
        <Header>
            <ul>
                <li style = {liStyle}><SignUp/></li>
                <li style = {liStyle}><SignIn/></li>
            </ul>
        </Header>
    )
}

export default HeaderContainer;