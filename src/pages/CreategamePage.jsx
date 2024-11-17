import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function CreateGame() {
    // State untuk menyimpan input field
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Fungsi untuk menangani submit form
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi input
        if (!title || !image || !description) {
            setError("Semua harus diisi!");
            return;
        }

        setLoading(true);
        setError("");
        setSuccess("");

        // Data yang akan dikirim ke API
        const gameData = { title, image, description };

        try {
            const response = await fetch("http://localhost:8000/create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(gameData),
            });

            const result = await response.json();

            if (response.ok) {
                setSuccess("Game berhasil ditambahkan!");
                setTitle("");
                setImage("");
                setDescription("");
            } else {
                setError(result.message || "Terjadi kesalahan");
            }
        } catch (err) {
            setError("Terjadi kesalahan saat menghubungi server");
        } finally {
            setLoading(false);
        }
    };
    const notify = () => toast("Berhasil Menambahkan");
    return (
        <div className="max-w-xl mx-auto p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Create Game</h1>

            {error && <div className="text-red-500 mb-4">{error}</div>}
            {success && <div className="text-green-500 mb-4">{success}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Judul
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Game Title"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Link Gambar
                    </label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Game Image URL"
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Deskripsi
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Game Description"
                        rows={4}
                        required
                    ></textarea>
                </div>

                <div className="gap-5 flex justify-center">
                    <Link to="/">
                        <button className=" flex justify-center bg-red-500 py-2 px-3 rounded-md w-[100px] text-white">
                            Kembali
                        </button>
                    </Link>
                    <button
                        type="submit"
                        onClick={notify}
                        className={`px-6 py-2 text-white rounded-md ${
                            loading
                                ? "bg-gray-400"
                                : "bg-blue-600 hover:bg-blue-700"
                        }`}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Create Game"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateGame;
