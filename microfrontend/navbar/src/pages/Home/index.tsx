/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>Home</div>
      <ul>
        <li onClick={() => navigate('/pag1')}>Pag1</li>
        <li onClick={() => navigate('/pag2')}>Pag2</li>
        <li onClick={() => navigate('/pag3')}>Pag3</li>
      </ul>
    </div>
  );
};
