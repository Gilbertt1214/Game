import { Link, useNavigate } from "react-router-dom";
import React from "react";
import Card from "../components/Card";
// import {data} from "../utils/index"
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { fetchData } from "../utils";
import { toast } from "react-toastify";

const HomePage = () => {
    const [data, setData] = useState([]);
    console.log("data", data);
    const navigate = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            const data = await fetchData();
            setData(data);
        };
        fetch();
    }, []);

    const handleLogout = () => {
        Swal.fire({
            title: "Apakah yakin ingin Logout?",
            showDenyButton: true,
            confirmButtonText: "Yakin",
            denyButtonText: `Batal`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                navigate("/login");
                Swal.fire("Berhasil Logout!", "", "success");
            }
        });
    };
    const notify = () => toast("Wow so easy!");
    return (
        <div className="w-[80%] mx-auto">
            <h1 className="text-3xl text-black-600 font-bold flex items-center justify-center mt-5 mb-5 ">
               SELAMAT DATANG DI WEB GAME 
            </h1>
            <div className="flex items-center justify-center ">
                <p className="text-lg text-gray-700 font-medium max-w-prose ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ea, harum sed ipsa recusandae sunt labore. Et sapiente ex
                    vitae sunt!
                </p>
            </div>
            <div className="flex flex-wrap gap-[20px]">
                {data.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        description={item.description}
                    />
                ))}
            </div>
            <div className="flex items-center gap-4 justify-center">
                <button
                    onClick={handleLogout}
                    className=" mt-6 flex justify-center bg-blue-500 py-2 px-3 rounded-md w-[100px] text-white"
                >
                    <p className="">Logout</p>
                </button>
                <Link to="/create">
                    <button className="mt-6 flex justify-center bg-green-500 py-2 px-3 rounded-md w-[200px] text-white">
                        Tambah Game
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
