import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useInput } from "../hooks/useInput";
import { Login } from "./LoginPage";
import { BiArrowBack } from "react-icons/bi";

export const register= () => {
    const [email, handleEmail] = useInput("")
    const [password, handlePassword] = useInput("")
    const [username, handleUsername] = useInput("")

    const navigate = useNavigate()

    const handleRegister  = (e) => {
        e.preventDefault()

        if (!username || !email || !password) {
            Swal.fire({
                title: "Semua harus diisi",
                icon: "error",
            });
            return;
        }

        localStorage.setItem("user", JSON.stringify({username, email, password}))

        Swal.fire({
            title: "Buat Akun Berhasil!",
            icon: "success"
        })
        navigate("/")
    }
    return(
        <div className="login flex items-center justify-center min-h-screen">
                    <div className="bg-transparant p-8 rounded-lg shadow-lg w-96">
                        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                        <form>
                        <div className="mb-4">
                                <label className="block mb-2 text-black" htmlFor="email">
                                    <i className="fas fa-envelope"></i> Username
                                </label>
                                <input
                                    type="Username"
                                    value={username}
                                    onChange={handleUsername}
                                    id="Username"
                                    className="w-full p-3 border rounded bg-gray-100"
                                    placeholder="Username"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-2 text-black" htmlFor="email">
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
                            <div className="mb-4">
                                <label className="block mb-2 text-black" htmlFor="password">
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
                            <div className="flex gap-3 justify-center">
                            <Link to='/login'>
                            <button
                                type="cancel"
                                className=" flex items-center gap-1 bg-pink-500 text-white p-3 rounded-lg font-semibold">
                                <BiArrowBack /> 
                                Kembali
                            </button>
                                    </Link>
                            <button
                                type="submit"
                                onClick={handleRegister}
                                className=" bg-pink-500 text-white p-3 rounded-lg font-semibold">
                                Confirm
                            </button>
                                    </div>
                        </form>
                        {/* <div className="text-center mt-4 text-gray-600">
                            Not a member? <a href="#" className="text-blue-600">create account</a>
                        </div> */}
                    </div>
                </div>
            );
}