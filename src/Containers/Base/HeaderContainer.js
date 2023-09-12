import React  from 'react';
import Header from "Components/Base/Header";
import SignInLink from "Components/Base/Header/SignInLink";
import SignUpLink from "Components/Base/Header/SignUpLink";

const liStyle = {
    listStyle: "none",
    float: "left",
};

const HeaderContainer = () => {
    return (
        <Header>
            <ul>
                <li style = {liStyle}><SignUpLink/></li>
                <li style = {liStyle}><SignInLink/></li>
            </ul>
        </Header>
    )
}

export default HeaderContainer;