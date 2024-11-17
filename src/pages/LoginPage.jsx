import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useInput } from "../hooks/useInput";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { toast } from "react-toastify";

export const Login = () => {
    const [email, handleEmail] = useInput("")
    const [password, handlePassword] = useInput("")
    const navigate = useNavigate()

    const handleLogin  = () => {

     // Ambil data pengguna dari localStorage
     const storedUser = JSON.parse(localStorage.getItem("user"));

     if (storedUser && storedUser.email === email && storedUser.password === password) {
         Swal.fire({
             title: "Login Berhasil!",
             icon: "success",
         });

         // Redirect ke halaman beranda atau dashboard
         navigate("/");
     } else {
         Swal.fire({
             title: "Email atau Password salah!",
             icon: "error",
         });
     }
 };

    return(
        <div className="login flex items-center justify-center min-h-screen">
                    <div className="bg-transparant p-8 rounded-lg shadow-lg w-96">
                    
                        <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>
                        <form>
                            <div className="input-box">
                                <label className="flex items-center gap-1 mb-2 text-black" htmlFor="email">
                                <FaUser className='icon' />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={handleEmail}
                                    id="email"
                                    className="w-full p-3 border rounded bg-gray-100"
                                    placeholder="Email"
                                />
                                
                            </div>
                            <div className="input-box">
                                <label className="flex items-center gap-1 mb-2 text-black" htmlFor="password">
                                <FaLock className='icon'/>
                                  Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={handlePassword}
                                    id="password"
                                    className="w-full p-3 border rounded bg-gray-100"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <input type="checkbox" id="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-black">Remember me</label>
                            </div>
                            <button
                                onClick={handleLogin}
                                type="submit"
                                className="w-full bg-pink-500 text-white p-3 rounded-lg font-semibold"
                                
                            >
                                LOGIN
                            </button>
                        </form>
                        
                        <div className="text-center mt-4 text-white">
                            Not a member? <Link to="/register" className="text-blue-400">create account</Link>
                        </div>
                    </div>
                </div>
            );
}