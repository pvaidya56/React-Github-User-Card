import React from 'react';
import UserCard from './UserCard';

const FollowerCard = ({ followers }) => {
 return followers.map((item, index) => {
     return <UserCard key={index + 1} user={item} />
 });
};

export default FollowerCard;