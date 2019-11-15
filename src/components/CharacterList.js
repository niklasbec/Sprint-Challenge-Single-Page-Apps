import React, { useEffect, useState } from "react";
import axios from 'axios'
import SearchFormWithFormik from './SearchForm'

export default function CharacterList() {
  const [characters, addCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      addCharacters(response.data.results)
      console.log(response.data.results);
      console.log(characters.length);
      console.log(characters[0]);
    })
    .catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <section className="character-list">
        <div>
          <SearchFormWithFormik characters={characters} />
            {characters.map(character => (
                <div className='character' key={character.id}>
                    <h2>Name: {character.name}</h2>
                    <p>Species: {character.species}</p>
                    <p>Status {character.status}</p>
                    <p>{character.type}</p>
                </div>
            ))}
        </div>
    </section>
  );
}
