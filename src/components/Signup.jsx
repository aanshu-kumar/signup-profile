import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../redux/slices/userSlice";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if(localStorage.getItem('token'))
      {
        navigate('/profile');
      }
  }, []);
 
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [error, setError] = React.useState(true);
  function checkForm() {
    if (
      name == "" ||
      email == "" ||
      password == "" ||
      confirmPassword == "" ||
      password != confirmPassword
    ) {
      setError(true);
    } else {
      setError(false);
      dispatch(setToken({
        token: name + "@" + password,
      }));
      dispatch(setUser({
        name: name,
        email: email,
        password: password,
      }));
      navigate("/profile");
    }
  }

  return (
    <div className="flex flex-col h-screen w-1/2 mx-auto">
      <h1 className="text-left text-5xl w-full mt-10">Signup</h1>

      <form className="flex flex-col space-y-8 mx-auto mt-8 w-full">
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Full Name"
          className="border-b-2 border-white"></input>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="Email"
          placeholder="Email"
          className="border-b-2 border-white"></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          className="border-b-2 border-white"></input>
        <input
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          type="text"
          placeholder="Confirm Password"
          className="border-b-2 border-white"></input>
      </form>
      {error ? (
        <p id="error" className="w-full text-red-500 mt-2">
          Error: All the fields are manditory.
        </p>
      ) : (
        <p id="success" className="w-full text-green-500">
          Successfully Signed Up.
        </p>
      )}
      <button
        onClick={checkForm}
        className="bg-white text-black px-7 py-2 w-1/4 mt-6">
        Submit
      </button>
    </div>
  );
};

export default Signup;
