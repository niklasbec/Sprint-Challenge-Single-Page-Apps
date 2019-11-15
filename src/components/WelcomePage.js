import React from "react";
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.button`
  font-size: 25px;
  padding: 8px;
  border: none;
  color: white;
  background: dodgerblue;
  margin-left: 50px;
  position: relative;
  bottom: 100px;

  &:hover {
    transform: scale(1.1);
  }
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <Link to='/characters'>
        <Button>See all characters</Button>
        </Link>

        <Link to='/locations'>
        <Button>See all locations</Button>
        </Link>
      </header>
    </section>
  );
}
