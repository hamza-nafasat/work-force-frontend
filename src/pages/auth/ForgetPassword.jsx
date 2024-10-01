import React from 'react'
import logo from "../../assets/images/logo/logo.png";
import loginImg from "../../assets/images/login/login-img.png";
import formImg from "../../assets/images/login/form-img.png";
import Input from "../../components/auth/Input";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../../components/shared/button/Button";

const ForgetPassword = () => {
  return (
    <section className="w-full h-[100vh] grid md:grid-cols-2">
      <div className="bg-primary py-[24px] lg:py-[90px] 2xl:py-[100px] hidden md:flex flex-col items-center justify-center">
        <div className="px-[24px]">
          <div className="flex items-center justify-start md:gap-4">
            <img src={logo} alt="logo" className="w-[60px] md:w-[90px]" />
            <h2 className="text-lg md:text-[30px] font-semibold text-white">
              Workforce Ease
            </h2>
          </div>
          <h1 className="my-4 text-white font-semibold text-2xl md:text3xl lg:text-[50px] leading-none lg:leading-[65px] text-center md:text-left">
            Forget Password!
          </h1>
          <p className="text-white text-base md:text-[30px] text-center md:text-left">
            Enter your Email Here
          </p>
        </div>
        <div className="mt-12">
          <img
            src={loginImg}
            alt="login image"
            className="max-w-[100%] w-[600px]"
          />
        </div>
      </div>
      <div className="bg-white relative my-[24px] lg:my-[90px] 2xl:my-[100px]">
        <div className="w-full bg-white md:shadow-form-shadow rounded-[20px] px-4 py-8 md:px-[60px] md:absolute md:left-[-5%] md:top-[50%] md:translate-x-[-5%] md:translate-y-[-50%] h-full flex flex-col">
          <h3 className="text-3xl text-center md:text-left md:text-[40px] text-[#414141] font-semibold">
            Welcome to WorkForce Ease!
          </h3>
          <form className="mt-6 md:mt-[50px] w-full">
            <Input label="Email Address" type="email" id="email" />
            <div className="mt-4 md:mt-[50px]">
                <Button type="submit" text="Send" bg="#e75d50" radius="14px" size="text-sm md:text-md" weight="500" mt="50" />
            </div>
          </form>
          <div className="mt-4 md:mt-[50px] flex justify-end items-end grow">
            <img src={formImg} alt="img" className="max-w-[100%] w-[200px]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgetPassword