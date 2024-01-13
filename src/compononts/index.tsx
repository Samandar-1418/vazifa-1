import React from 'react';
import './index.css'
interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: Address;
  phone?: string;
  website?: string;
  company?: Company;
}

interface CardProps {
  data: User[];
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="card-wrapper">
      {data.length &&
        data.map((user, index) => (
          <div className='card' key={index}>
            <h3>name:{user.name}</h3>
            <p>username:{user.username}</p>
            <p>email:{user.email}</p> 
            <p>city:{user.address?.city}</p> 
            <p>zipcode:{user.address?.zipcode}</p> 
            <p>street:{user.address?.street}</p> 
            <p>suite:{user.address?.suite}</p> 
            <p>lat:{user.address?.geo.lat}</p> 
            <p>lng:{user.address?.geo.lng}</p> 
          </div>
        ))}
    </div>
  );
};

export default Card;
