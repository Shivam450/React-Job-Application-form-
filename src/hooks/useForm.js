import { useState } from 'react';

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setValues((prevValues) => {
        if (checked) {
          return {
            ...prevValues,
            [name]: [...prevValues[name], value],
          };
        } else {
          return {
            ...prevValues,
            [name]: prevValues[name].filter((item) => item !== value),
          };
        }
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  return [values, handleChange, setValues];
};

export default useForm;

