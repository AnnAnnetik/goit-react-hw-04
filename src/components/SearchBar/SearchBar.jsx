import { useState } from 'react'; // Import useState hook

import toast, { Toaster } from 'react-hot-toast';
import style from './SearchBar.module.css';
import { FiSearch } from 'react-icons/fi';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const nameFieldId = useId();
  const notify = () => toast('Search images and photos');
  const handleSubmit = value => {
    setValue(''); // Reset input value after form submission
    notify();
  };
  const queryFormSchema = Yup.object().shape({
    query: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      validationSchema={queryFormSchema}
      initialValues={{ query: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={style.formContainer}>
        <div className={style.inputContainer}>
          <label htmlFor={nameFieldId}>Search:</label>
          <Field
            type="text"
            name="query"
            id={nameFieldId}
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
            className={style.input}
          />
          <ErrorMessage name="query" as="span" />
        </div>

        <button className={style.button} type="submit">
          <FiSearch size="16px" />
        </button>
        <Toaster />
      </Form>
    </Formik>
  );
};

export default SearchBar;
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import * as Yup from "yup";

// const searchFormSchema = Yup.object().shape({
//   searchTerm: Yup.string().required("Search term is required!"),
// });

// const FORM_INITIAL_VALUES = {
//   searchTerm: "",
// };

// const SearchForm = ({ onSetSearchQuery }) => {
//   const handleSubmit = (values) => {
//     onSetSearchQuery(values.searchTerm);
//   };

//   return (
//     <Formik
//       initialValues={FORM_INITIAL_VALUES}
//       validationSchema={searchFormSchema}
//       onSubmit={handleSubmit}
//     >
//       <Form>
//         <h2>Search product by brand or name</h2>
//         <label>
//           <Field type="text" name="searchTerm" placeholder="Enter search query..." />
//           <ErrorMessage component="p" name="searchTerm" />
//         </label>
//         <button type="submit" aria-label="Search">
//           🔍
//         </button>
//       </Form>
//     </Formik>
//   );
// };

// export default SearchForm;
