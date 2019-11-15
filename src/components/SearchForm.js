
import React, { useState } from "react";
import { Form, Field, withFormik, ErrorMessage } from 'formik';
import axios from 'axios'
import { tsBooleanKeyword } from "@babel/types";
// import * as Yup from 'yup';

const SearchForm = (props) => {
 
  return (
    <section className="search-form">
     <div>
       <Form>
         <ErrorMessage name='searchField' />
         <label>Search for character
           <Field
           name='searchField'
           type='text'
           placeholder='Enter character name here.' />
         </label>
         <input type='submit' />
       </Form>
       <SearchedChars />
     </div>
    </section>
  );
}

let filteredCharacters = []

const SearchedChars = () => {
  
  return (
    <section className='searchedCharacters'>
    <div>
        {filteredCharacters.map(character => (
            <div className='character-searched' key={character.id}>
                <h2>Name: {character.name}</h2>
                <p>Species: {character.species}</p>
                <p>Status {character.status}</p>
                <p>{character.type}</p>
            </div>
        ))}
    </div>
    </section>
  )
}

let searchFormWithFormik = withFormik ({
    mapPropsToValues () {
      return {
        search: ''
      }
    },
    
    // validationSchema: Yup.object().shape({
    //   search: Yup.string().required('Not a string')
    // }),

    handleSubmit(values, tools) {
      let newArray = tools.props.characters

      filteredCharacters = newArray.filter((currentItem, index) => {
        return currentItem.name.includes(values.searchField)
      })

      console.log(filteredCharacters);
      


    }
})(SearchForm)

export default searchFormWithFormik



