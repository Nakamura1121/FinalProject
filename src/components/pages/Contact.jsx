import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  message: yup.string().required('Message is required'),
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} placeholder="Name" />
        <p>{errors.name?.message}</p>

        <input {...register('email')} placeholder="Email" />
        <p>{errors.email?.message}</p>

        <textarea {...register('message')} placeholder="Message" />
        <p>{errors.message?.message}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
