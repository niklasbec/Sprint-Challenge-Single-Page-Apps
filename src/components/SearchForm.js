import React, { useState } from "react";
import { Form, Field, withFormik, ErrorMessage } from 'formik';
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
     </div>
    </section>
  );
}

const searchFormWithFormik = withFormik ({
    mapPropsToValues () {
      return {
        search: ''
      }
    },
    
    // validationSchema: Yup.object().shape({
    //   search: Yup.string().required('Not a string')
    // }),

    handleSubmit(values, tools) {

    }
})(SearchForm)

export default searchFormWithFormik
