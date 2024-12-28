import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link';  // Import Link dari Next.js
import 'react-toastify/dist/ReactToastify.css';

const Added = () => {
    const [kapals, setKapals] = useState([]);

    // Fungsi untuk mengambil data kapal dari API
    const fetchKapals = async () => {
        try {
            const response = await axios.get('/api/kapal');
            console.log('Response Data:', response.data);

            setKapals(response.data.kapals || response.data);
        } catch (error) {
            console.error('Error fetching kapals:', error);
        }
    };

    // Fungsi untuk menghapus kapal berdasarkan ID
    const deleteKapal = async (id) => {
        try {
            const response = await axios.delete('/api/kapal', {
                params: { id: id }
            });
            console.log(response.data.msg);  // Log success message or error
            fetchKapals();  // Refresh data kapal setelah penghapusan

            // Menampilkan notifikasi sukses
            toast.success('Data Kapal berhasil dihapus!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (error) {
            console.error('Error deleting kapal:', error);
            // Menampilkan notifikasi gagal
            toast.error('Gagal menghapus Data kapal!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    // Panggil fetchKapals saat komponen pertama kali di-render
    useEffect(() => {
        fetchKapals();
    }, []); // Memanggil fetchKapals hanya saat komponen pertama kali di-render

    return (
        <section className="pt-10 container px-4 mx-auto pb-10">
            <div className="flex flex-col">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500">Nama Kapal</th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Waktu Terdaftar</th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Jenis Kapal</th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Kapasitas Muatan</th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Gambar</th>
                                        <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700">
                                    {kapals.length > 0 ? (
                                        kapals.map((kapal) => (
                                            <tr key={kapal._id}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700">{kapal.nama_kapal || 'Tidak Ada Kapal'}</td>
                                                <td className="px-4 py-4 text-sm text-gray-500">
                                                    {new Date(kapal.waktu_terdaftar).toLocaleDateString()}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500">{kapal.jenis_kapal || 'Data Tidak Tersedia'}</td>
                                                <td className="px-4 py-4 text-sm text-gray-500">{kapal.kapasitas_muatan} Ton</td>
                                                <td className="px-4 py-4 text-sm text-gray-500">
                                                    <Image
                                                        width={40}
                                                        height={40}
                                                        src={kapal.image || '/fallback-image.jpg'}
                                                        alt="Foto Kapal"
                                                    />
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500">
                                                    <div className="flex items-center gap-x-6">
                                                        {kapal && kapal._id ? (
                                                            <Link
                                                                className="text-gray-500 transition-colors duration-200 dark:hover:text-indigo-500 dark:text-gray-300 hover:text-indigo-500 focus:outline-none"
                                                                href={`/admin/edit-kapal/${kapal._id}`}
                                                            >
                                                                Edit
                                                            </Link>
                                                        ) : (
                                                            <span className="text-gray-400 cursor-not-allowed">Edit</span>
                                                        )}


                                                        <button
                                                            className="text-blue-500 transition-colors duration-200 hover:text-indigo-500 focus:outline-none"
                                                            onClick={() => deleteKapal(kapal._id)}
                                                        >
                                                            Hapus
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center py-4">Data Kapal Tidak Ditemukan</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </section>
    );
};

export default Added;
