import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import { Route, Link } from 'react-router-dom'
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from './components/SearchForm'


export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' component={ CharacterList } />
    </main>
  );
}
