import React from 'react';
import styled from "styled-components";
  
const UserCard = ({ user }) => {
    return(
        <Div>
            <Img src={user["avatar_url"]} alt={user["login"]}/>
            <h1>{user["name"]}</h1>
            <H2>Github Handle: {user["login"]}</H2>
            <p>{user["bio"]}</p>
            <p>Location: {user["location"] ? user["location"] : "Unknown"}</p>
            <Button>
             <a target="blank" href={user["html_url"]}>Visit Profile</a>
            </Button>
            <p>Followers: {user["followers"]}</p>
            <p>Following: {user["following"]}</p>
    </Div>
    );
}

const Div = styled.div`
  width: 30%;
  text-align: center;
  border: 2px solid pink;
  margin: 10px 0;
  background-color: lightgrey;
`;

const Button = styled.button`
    border-radius: 5px;
    padding: 6px 10px;
`;

const Img = styled.img`
  margin-top: 10px;
  width: 90%;
`;

const H2 = styled.h2`
  font-style: italic;
`;
export default UserCard;