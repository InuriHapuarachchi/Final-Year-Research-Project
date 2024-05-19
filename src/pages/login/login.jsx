import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import kp from '../../assets/images/backgrounds/kp.png';

const BgImage = "https://plus.unsplash.com/premium_photo-1661779993854-f148139e2030?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const allowedUsernames = ["user1", "user2", "user3"];
const allowedPasswords = ["pass1", "pass2", "pass3"];

function LoginPage() {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Please fill in both fields");
            return;
        }

        const usernameIndex = allowedUsernames.indexOf(username);
        const passwordIndex = allowedPasswords.indexOf(password);

        if (usernameIndex > -1 && passwordIndex === usernameIndex) {
            console.log("Username:", username);
            console.log("Password:", password);
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="relative flex flex-row h-screen w-screen">
            {/* Logo Text */}
            <div className="absolute top-4 left-4 text-4xl font-bold text-black">
                EDUFLEX
            </div>

            <div className="w-1/2 h-screen bg-cover flex justify-center bg-amber-300 items-center" style={{ backgroundImage: `url(")` }}>
                <div>
                    <img src={kp} width={500} alt="Background" />
                </div>
            </div>

            <div className="w-1/2 flex justify-center items-center bg-white">
                <form onSubmit={handleSubmit} className="p-20 py-28 border-2 border-black shadow-lg rounded-xl">
                    <div className="text-3xl w-64 text-center text-black mb-10">Login</div>
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Email/Username"
                            className="w-full p-2 text-lg bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-amber-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-10">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 text-lg bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-amber-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div onClick={() => navigate("/register")} className="text-amber-500 cursor-pointer hover:underline">Register</div>
                        <button type="submit" className="py-2 px-5 border-2 border-black text-black bg-amber-300 rounded hover:bg-amber-400 transition duration-200">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
