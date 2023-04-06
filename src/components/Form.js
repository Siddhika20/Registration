import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';


export default function Form(onChange, value) {
  const {register, handleSubmit, watch,formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);
  const password = React.useRef({});
  password.current = watch('password', '');
  const confirmPassword = React.useRef({});
  confirmPassword.current = watch('confirmPassword', '');
  const comparePasswords = () => {
    return password.current === confirmPassword.current;
  };
  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Registration Page</h2>
          <span>register and enjoy the service</span>

          <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        
            <input type="text" {...register('username', { required: true })} placeholder="username" />
            {errors.username?.type === 'required' && ( <span>Username is required</span> )}
       
          
            <input type="text" {...register('password', { required: true })} placeholder="password"/>
            {errors.password?.type === 'required' && (<span>Password is required </span>)}

            <input type="text"{...register('confirmPassword', { required: true, validate: comparePasswords })}placeholder="confirm password"/>
            {errors.confirmPassword?.type === 'required' && (<span>Confirm your Password</span>)}
            {errors.confirmPassword?.type === 'validate' && (<span>Passwords do not match</span>)}

            <input type="text" {...register('mobile', { required: true, maxLength: 10 })} placeholder="mobile number" />
            {errors.mobile?.type === 'required' && ( <span>Mobile Number is required</span> )}
            {errors.mobile?.type === 'maxLength' && 'Max Length Exceed'}

            <button className="btn">Sign Up</button>
            <p className="sign-up">
              Already have an account? <a href="#">Log in now</a>
            </p>
            <div class="icons">
              <a href="#"> <ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#"> <ion-icon name="logo-instagram"></ion-icon> </a>
              <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
              <a href="#"><ion-icon name="logo-google"></ion-icon></a>
              <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
            </div>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}