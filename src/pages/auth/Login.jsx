import { useState } from "react";
import logo from "../../assets/images/logo/logo.png";
import loginImg from "../../assets/images/login/login-img.png";
import formImg from "../../assets/images/login/form-img.png";
import Input from "../../components/auth/Input";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/shared/button/Button";
import { useLoginMutation } from "../../redux/api/authApi";
import { toast } from "react-toastify";

const Login = () => {
  const [passwordIsActive, setPasswordIsActive] = useState(true);
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const handlePasswordActive = () => {
    setPasswordIsActive(!passwordIsActive);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const res = await login(data);

      if (res?.data?.success === true) {
        toast.success(res?.data?.message);

        setTimeout(() => {
          navigate("/user/home");
        }, 2000);
      }
    } catch (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <section className="w-full h-[100vh] grid md:grid-cols-2">
      <div className="bg-primary py-[24px] lg:py-[90px] 2xl:py-[100px] hidden md:flex flex-col items-center justify-center">
        <div className="px-[24px]">
          <div className="flex items-center justify-start md:gap-4">
            <img src={logo} alt="logo" className="w-[50px] md:w-[70px]" />
            <h2 className="text-lg md:text-2xl font-semibold text-white">
              Workforce Ease
            </h2>
          </div>
          <h1 className="my-4 text-white font-semibold text3xl lg:text-[40px] leading-none lg:leading-[45px] text-center md:text-left">
            Welcome to Workforce <br />
            Ease!
          </h1>
          <p className="text-white text-base md:text-xl text-center md:text-left">
            Register your account
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
        <div className="w-full bg-white md:shadow-form-shadow rounded-[20px] px-4 py-8 md:px-[60px] md:absolute md:left-[-5%] md:top-[50%] md:translate-x-[-5%] md:translate-y-[-50%] flex flex-col">
          <h3 className="text-2xl text-center md:text-left md:text-[32px] text-[#414141] font-semibold">
            Welcome to WorkForce Ease!
          </h3>
          <form className="mt-6 md:mt-[50px] w-full" onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              type="email"
              id="email"
              name={"email"}
              placeholder={"Enter Email Address"}
            />
            <div className="relative mt-4 md:mt-6">
              <Input
                label="Password"
                type={passwordIsActive ? "password" : "text"}
                id="password"
                name={"password"}
                placeholder={"Enter Password"}
              />
              <div
                className="absolute right-5 bottom-[20%] cursor-pointer"
                onClick={handlePasswordActive}
              >
                {passwordIsActive ? (
                  <IoEye style={{ color: "#a6a6a6", width: "25px" }} />
                ) : (
                  <IoEyeOff style={{ color: "#a6a6a6", width: "25px" }} />
                )}
              </div>
            </div>
            <div className="flex justify-end mt-4 mb-6 md:mb-[30px]">
              <Link to="/forget-password">
                <p className="text-sm text-[#676767]">Forget Password?</p>
              </Link>
            </div>
            <Button
              type="submit"
              text="Login"
              bg="#e75d50"
              radius="14px"
              size="text-sm md:text-md"
              weight="500"
            />
          </form>
          <div className="mt-4 md:mt-[50px] flex justify-end items-end grow">
            <img src={formImg} alt="img" className="max-w-[100%] w-[150px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
