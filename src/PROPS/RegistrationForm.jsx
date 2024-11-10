import React from 'react';
import FormProvider from './FormProvider';
import { useUserContext } from '../CONTEXT/userContext';
import { Link } from 'react-router-dom';

function RegistrationForm() {
    const { addUsername } = useUserContext();
  return (
    <>
    <FormProvider
      render={({ values, errors, handleChange, validate }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Submit logic here, like sending data to the server
            if (!errors.name && !errors.email && !errors.password) {
              console.log('Form submitted', values);
              addUsername(values.name);
            }
          }}
        >
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={values.name || ''}
              onChange={(e) => {
                handleChange('name', e.target.value);
                validate('name', e.target.value);
              }}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              value={values.email || ''}
              onChange={(e) => {
                handleChange('email', e.target.value);
                validate('email', e.target.value);
              }}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              value={values.password || ''}
              onChange={(e) => {
                handleChange('password', e.target.value);
                validate('password', e.target.value);
              }}
            />
            {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
          </div>

          <button type="submit">Register</button>
        </form>
      )}
    />
    <Link to="/">Home</Link>
    </>
  );
}

export default RegistrationForm;
