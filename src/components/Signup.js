import React, { useState } from "react";
import { useHistory,Link } from "react-router-dom";

const Signup = () => {
const [credentials, setCredentials] = useState({ name:"",email: "", password: "",cpassword:"" });
let history = useHistory();

const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
        method: "POST", // *POST is use bcoz here we are login the user
        headers: {
        "Content-Type": "application/json",
    },

    body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password
    }),

    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
        // redirect to login
        history.push("/login");
    }
};

const onChange = (e) => {
setCredentials({...credentials, [e.target.name]: e.target.value});
};
return (
<>
    <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gray-100">
        <div className="content text-3xl text-center md:text-left">
            <h1 className="text-5xl text-indigo-500 font-bold">Cloudbook</h1>
            <p>You can always change your plan, but only if you have one.</p>
        </div>
        <div className="container mx-auto flex flex-col items-center">
            <form onSubmit={handleSubmit} className="shadow-lg w-96 p-4 flex flex-col bg-white rounded-lg">
                <input required type="text" placeholder="Name" name="name" value={credentials.name}
                    onChange={onChange}
                    className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                <input required type="email" placeholder="Email" name="email" value={credentials.email}
                    onChange={onChange}
                    className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                <input required type="password" placeholder="Password" name="password" value={credentials.password}
                    onChange={onChange}
                    className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                <input required type="password" placeholder="Confirm Password" name="cpassword" value={credentials.cpassword}
                    onChange={onChange}
                    className="mb-3 py-3 px-4 border border-gray-400 focus:outline-none rounded-md focus:ring-1 ring-cyan-500" />
                <button type="submit" className={credentials.password===credentials.cpassword?"w-full bg-indigo-500 text-white p-3 rounded-lg font-semibold text-lg":"w-full bg-indigo-500 text-white p-3 rounded-lg cursor-not-allowed font-semibold text-lg"}>
                Signup
                </button>
                <Link to="/login"
                    className="w-full bg-green-500 mt-3 mb- text-center text-white p-3 rounded-lg font-semibold text-lg">
                Already have an Account
                </Link>
            </form>
        </div>
    </div>
</>
)};

export default Signup;