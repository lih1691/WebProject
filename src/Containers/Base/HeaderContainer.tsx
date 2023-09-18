import React  from 'react';
import styled from 'styled-components';
import Header from "@Components/Base/Header";
import SignInLink from "@Components/Base/Header/SignInLink";
import SignUpLink from "@Components/Base/Header/SignUpLink";

const NonDotli = styled.li`
  list-style: none;
  float: left;
`

const HeaderContainer: React.FC= () => {
    return (
        <Header>
            <ul>
                <NonDotli><SignUpLink/></NonDotli>
                <NonDotli><SignInLink/></NonDotli>
            </ul>
        </Header>
    )
}

export default HeaderContainer;