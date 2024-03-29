import React, { useState } from "react";
import { useHistory,Link } from "react-router-dom";

const Signup = (props) => {
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
        props.showAlert("Account Created Successfully","green","M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z")
    }else{
        props.showAlert("Enter Valid Details","red","M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z")
    }
};

const onChange = (e) => {
setCredentials({...credentials, [e.target.name]: e.target.value});
};
return (
<>
    <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-white-100">
        <div className="content text-3xl text-center md:text-left">
            <h1 className="text-5xl text-indigo-500 font-bold">Cloudbook</h1>
            <p>You can always change your plan, but only if you have one.</p>
        </div>
        <div className="container -mt-32 mx-auto flex flex-col items-center">
            <form onSubmit={handleSubmit} className="shadow-lg w-96 p-4 flex flex-col bg-gray-100 rounded-lg">
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