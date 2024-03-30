// import toast, { Toaster } from 'react-hot-toast';
// import style from './SearchBar.module.css';
// import { FiSearch } from 'react-icons/fi';
// import { useId } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const SearchBar = ({ hendleSearch }) => {
//   const nameFieldId = useId();
//   const notify = () => toast('Search images and photos');
//   const handleSubmit = values => {
//     hendleSearch(values);
//     console.log('values: ', values);

//     notify();
//   };
//   const queryFormSchema = Yup.object().shape({
//     query: Yup.string(),
//   });

//   return (
//     <Formik
//       validationSchema={queryFormSchema}
//       initialValues={{ query: '' }}
//       onSubmit={handleSubmit}
//     >
//       <Form className={style.formContainer}>
//         <div className={style.inputContainer}>
//           <label htmlFor={nameFieldId}></label>
//           <Field
//             type="text"
//             name="query"
//             id={nameFieldId}
//             placeholder="Search images and photos"
//             autoComplete="off"
//             autoFocus
//             className={style.input}
//           />
//           <ErrorMessage name="query" as="span" />
//         </div>

//         <button className={style.button} type="submit">
//           <FiSearch size="16px" />
//         </button>
//         <Toaster />
//       </Form>
//     </Formik>
//   );
// };

// export default SearchBar;
// // import toast, { Toaster } from 'react-hot-toast';

// // export const SearchBar = ({ onSubmit }) => {
// //   const handleSubmit = e => {
// //     e.preventDefault();
// //     const inputValue = e.target.elements.search.value;
// //     console.log(inputValue);
// //     if (!inputValue) {
// //       toast.error('This is an error!');
// //       return;
// //     }
// //     onSubmit(inputValue);
// //     e.target.reset();
// //   };

// //   return (
// //     <header>
// //       <form onSubmit={handleSubmit}>
// //         <input
// //           type="text"
// //           name="search"
// //           autoComplete="off"
// //           autoFocus
// //           placeholder="Search images and photos"
// //         />
// //         <button type="submit">Search</button>
// //       </form>
// //       <Toaster
// //         position="top-right"
// //         toastOptions={{
// //           duration: 3000,
// //           style: { background: '#fff', color: '#1f1fc4' },
// //         }}
// //       />
// //     </header>
// //   );
// // };
export const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

    // Якщо текстове поле порожнє, виводимо повідомлення
    // і припиняємо виконання функції.
    if (form.elements.topic.value.trim() === '') {
      alert('Please enter search term!');
      return;
    }

    // У протилежному випадку викликаємо пропс
    // і передаємо йому значення поля
    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Пошук статей..." />
      <button>Пошук</button>
    </form>
  );
};
