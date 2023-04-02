import React from 'react'
import bgImg from '../assets/img1.jpg';
import { useForm } from 'react-hook-form';

export default function Form() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

     //console.log(watch('username'));
    
  return (
    <section>
        <div className="register">
        
            <div className="col-1">
                <h2>Registration Page</h2>
                <span>register and enjoy the service</span>

            <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("username", { required: true })} placeholder="username"/>
            <input type="text"{...register("password", { required: true })}placeholder="password"/> 
            <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
            <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                {errors.mobile?.type === "required" && "Mobile Number is required"} 
                {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign Up</button>
                    <p className="sign-up">
                  Already have an account? <a href="#">Log in now</a>
                </p>
                    <div class="icons">
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
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
  )
}
