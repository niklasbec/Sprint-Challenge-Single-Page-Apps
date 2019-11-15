
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
      console.log(tools.props.characters[0].name);
      let newArray = tools.props.characters
      console.log(newArray);

      filteredCharacters = newArray.filter((currentItem, index) => {
        return currentItem.name.includes(values.searchField)
      })

      console.log(filteredCharacters);
      


    }
})(SearchForm)

export default searchFormWithFormik



//Previous attempt that didnt work

// import React, { useState } from "react";
// import { Form, Field, withFormik, ErrorMessage } from 'formik';
// import axios from 'axios'
// import { readlinkSync } from "fs";
// // import * as Yup from 'yup';

// const SearchForm = (props) => {
 
//   return (
//     <section className="search-form">
//      <div>
//        <Form>

//          <ErrorMessage name='searchField' />
//          <label>Search for character
//            <Field
//            name='searchField'
//            type='text'
//            placeholder='Enter character name here.' />
//          </label>
//          <input type='submit' />
//        </Form>
//      </div>
//     </section>
//   );
// }

// const searchFormWithFormik = withFormik ({
//     mapPropsToValues () {
//       return {
//         search: ''
//       }
//     },
    
//     // validationSchema: Yup.object().shape({
//     //   search: Yup.string().required('Not a string')
//     // }),

//     handleSubmit(values, tools) {
//       tools.resetForm()
//       let searchedCharacter = []
//       console.log(values.searchField);
      
//       axios.get('https://rickandmortyapi.com/api/character/')
//         .then(response => {
//           const responseData = response.data.results
//           searchedCharacter = responseData.filter((currentItem, index) => {
        
//                return currentItem.name.includes(values.searchField)
//              })
             
//       })
//       .catch(error => {
//         console.log(error);
//       })
//       searchedCharacter = [{name: 'Rick',
//       species: 'hi',
//     status: 'ffdf',
//   type: 'dasds',
// id: 1}]
//       console.log(searchedCharacter);
//       return (
//         <div>
//             {searchedCharacter.map(character => (
//                 <div className='character' key={character.id}>
//                     <h2>Name: {character.name}</h2>
//                     <p>Species: {character.species}</p>
//                     <p>Status {character.status}</p>
//                     <p>{character.type}</p>
//                 </div>
//             ))}
//         </div>
//       )
//     }
// })(SearchForm)

// export default searchFormWithFormik
