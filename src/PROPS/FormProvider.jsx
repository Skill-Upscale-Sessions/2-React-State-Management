import React, { useState } from 'react';

function FormProvider({ render }) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  const validate = (name, value) => {
    // Basic validation: For example, check if required fields are filled
    const error = value === '' ? 'This field is required' : '';
    setErrors({ ...errors, [name]: error });
  };

  return render({
    values,
    errors,
    handleChange,
    validate
  });
}

export default FormProvider;
