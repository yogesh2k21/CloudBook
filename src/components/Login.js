import React, { useState } from "react";
import { useHistory ,Link } from "react-router-dom";

const Login = () => {

const [credentials, setCredentials] = useState({ email: "", password: "" });
let history = useHistory();

const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST', // *POST is use bcoz here we are login the user
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: credentials.email,
            password: credentials.password
        })
    });
    const json = await response.json();
    console.log(json);
    if (json.success){
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        history.push("/");

    }
    else{
        alert("Invalid credentials");
    }
};

const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
};

return (
<>
        <div
            className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100">
            <div className="content text-3xl text-center md:text-left">
                <h1 className="text-5xl text-indigo-500 font-bold">Cloudbook</h1>
                <p>You can always change your plan, but only if you have one.</p>
            </div>
            <div className="container mx-auto flex flex-col items-center">
                <form onSubmit={handleSubmit} className="shadow-lg w-80 p-4 flex flex-col bg-white rounded-lg">
                    <input required type="email" placeholder="Email" name="email" value={credentials.email} onChange={onChange}
                        className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                    <input required type="password" placeholder="Password" name="password" value={credentials.password} onChange={onChange}
                        className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                    <button type="submit" className="w-full bg-indigo-500 text-white p-3 rounded-lg font-semibold text-lg">
                        Login
                    </button>
                    <a href="/" className="text-blue-400 text-center my-2">Forgot Pasword?</a>
                    <hr />
                    <Link to="/signup"
                        className="w-full bg-green-500 mt-8 mb-4 text-center text-white p-3 rounded-lg font-semibold text-lg">
                    Create New Account
                    </Link>
                </form>
            </div>
        </div>
</>
);
};

export default Login;