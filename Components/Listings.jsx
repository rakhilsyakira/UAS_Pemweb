import React, { useEffect, useState } from 'react'
import ListingCard from './ListingCard'
import axios from 'axios';

function Listings() {
    const [menu, setMenu] = useState("All");
    const [kapals, setKapals] = useState([]);

    // Fetch Kapals from API
    const fetchKapals = async () => {
        try {
            const response = await axios.get('/api/kapal'); // URL untuk mendapatkan data kapal
            setKapals(response.data.kapals); // Menyimpan data kapal
            console.log(response.data.kapals); // Log data kapal untuk pengecekan
        } catch (error) {
            console.error('Error fetching kapals:', error); // Menangani error
        }
    }

    useEffect(() => {
        fetchKapals(); // Memanggil fungsi fetchKapals saat komponen pertama kali di-render
    }, []);

    return (
        <div>
            <div className="py-5 px-5 md:px-12 lg:px-28 text-center my-8">
                <h1 className='text-3xl sm:text-5xl font-medium'>Kapal Listings</h1>
                <p className='mt-10 mx-w-[740px] m-auto text-xs sm:text-base'>
                    Daftar kapal yang tersedia untuk disewa atau dibeli.
                </p>
            </div>

            {/* Filter Menu */}
            <div className="flex justify-center gap-6 my-10">
                <button
                    onClick={() => setMenu('All')}
                    className={menu === "All" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}
                >
                    All
                </button>
                <button
                    onClick={() => setMenu('Pesiar')}
                    className={menu === "Pesiar" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}
                >
                    Kapal Pesiar
                </button>
                <button
                    onClick={() => setMenu('Feri')}
                    className={menu === "Feri" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}
                >
                    Kapal Feri
                </button>
                <button
                    onClick={() => setMenu('Kargo')}
                    className={menu === "Kargo" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}
                >
                    Kapal Kargo
                </button>
                <button
                    onClick={() => setMenu('Penumpang')}
                    className={menu === "Penumpang" ? 'bg-black text-white py-1 px-4 rounded-sm' : ""}
                >
                    Kapal Penumpang
                </button>
            </div>

            {/* Displaying List of Kapals */}
            <div className="flex flex-wrap justify-around gap-1 gap-y-5 mb-10 xl:mx-16">
                {kapals && Array.isArray(kapals) && kapals.length > 0 ? (
                    kapals
                        .filter((item) => menu === "All" ? true : item.jenis_kapal === menu)
                        .map((item, index) => (
                            <ListingCard
                                key={index}
                                id={item._id}
                                image={item.image}
                                nama_kapal={item.nama_kapal}
                                kapasitas_muatan={item.kapasitas_muatan}
                                jenis_kapal={item.jenis_kapal}
                                waktu_terdaftar={item.waktu_terdaftar}
                            />
                        ))
                ) : (
                    <p className="text-center text-gray-500">Data kapal belum tersedia</p>
                )}
            </div>
        </div>
    );
}

export default Listings;
