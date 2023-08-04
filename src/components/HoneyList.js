import React from 'react';
import { Link } from 'react-router-dom';

const HoneyList = ({ honeyList }) => {
  return (
    <ul>
      {honeyList.map((honey) => (
        <li key={honey._id}>
          <div>
            <strong>{honey.name}</strong> - {honey.price} VND
            <Link to={`/honey/${honey._id}`}>Xem chi tiết</Link>
          </div>
          <div>{honey.description}</div>
        </li>
      ))}
    </ul>
  );
};

export default HoneyList;
