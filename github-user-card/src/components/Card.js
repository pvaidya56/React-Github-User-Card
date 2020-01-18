import React from 'react';

const Card = ({ user }) => {
    return(
        <div>
            <img src={user["avatar_url"]} alt={user["login"]}/>
            <h1>{user["name"]}</h1>
            <h2>Github Handle: {user["login"]}</h2>
            <p>{user["bio"]}</p>
            <p>Location: {user["location"] ? user["location"] : "Unknown"}</p>
            <p>
             Profile: <a target="blank" href={user["html_url"]}>{user["html_url"]}</a>
            </p>
            <p>Followers: {user["followers"]}</p>
            <p>Following: {user["following"]}</p>
    </div>
    );
}

export default Card;