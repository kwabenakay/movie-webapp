import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../data.json";
import { Logo } from "../components/SVG";

interface FormErrors {
  email?: string[];
  password?: string[];
}

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  let navigate = useNavigate();

  
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = { email: email, password: password };
      if (formData.email && formData.password) {
        localStorage.setItem("data", JSON.stringify(data));
        navigate("/home");
      } 
      else if (!formData.email ) {
        
        console.log("Something went wrong");
        setFormErrors({
          email: ["can't be empty"]})
      } 
      else if (!formData.password ){
        console.log("Something went wrong");
        setFormErrors({
          password: ["can't be empty"],
        });
      }
    } catch (error) {
      setFormErrors({
        email: ["can't be empty"],
        password: ["can't be empty"],
      });
      console.log(error);
    }
  }

  return (
    <div className=" mx-auto flex flex-col items-center gap-14 pt-12 tablet:gap-20">
      <div>
       <Logo/>
      </div>
      <div className=" text-white text-sm bg-light-teal-blue mx-auto p-6 min-w-[326px] rounded-lg tablet:min-w-[400px] tablet:rounded-xl">
        <form
          className=" flex flex-col items-center gap-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl self-start">Login</h1>
          <div className=" w-full h-9">
            <input
              id="email"
              type="email"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={`w-full h-full bg-transparent border-solid ${
                formErrors.email?.[0] ? "border-red" : "border-grey"
              } border-b-2 outline-none pb-4 px-4 focus:border-white focus:caret-red hover:cursor-pointer`}
            />
            {formErrors.email?.[0] && (
              <div
                id="emailText"
                className=" relative left-[60%] mt-[-2.25rem] w-28 text-red"
              >
                {formErrors.email?.[0]}
              </div>
            )}
          </div>
          <div className=" w-full h-9">
            <input
              id="password"
              type="Password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={`w-full h-full bg-transparent border-solid ${
                formErrors.password?.[0] ? "border-red" : "border-grey"
              } border-b-2 outline-none pb-4 px-4 focus:border-white focus:caret-red hover:cursor-pointer`}
            />
            {formErrors.password?.[0] && (
              <div
                id="passwordText"
                className=" relative left-[60%] mt-[-2.25rem] w-28 text-red"
              >
                {formErrors.password?.[0]}
              </div>
            )}
          </div>
          <input
            type="submit"
            value="Login to your account"
            className=" w-full h-12 mt-4 bg-red rounded-lg outline-none text-xl hover:bg-white hover:text-teal-blue hover:cursor-pointer"
          />
        </form>
        <div className="text-center mt-6">
          Don't have an account?
          <span className=" text-red">
            <Link to={`/signup`}> Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
