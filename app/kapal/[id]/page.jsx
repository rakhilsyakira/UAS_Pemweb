'use client'
import { assets, blog_data } from '@/Assets/assets';
import Footer from '@/Components/AdminComponents/Footer';
import Navbar from '@/Components/AdminComponents/Navbar';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = ({ params }) => {
    const [data, setData] = useState(null);

    const fetchkapalData = async () => {
        const response = await axios.get('/api/kapal', {
            params: {
                id: params.id,
            }
        })
        setData(response.data);
    }

    useEffect(() => {
        fetchkapalData();
    }, [])

    return (data ? <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <Navbar/>
            <div className="text-center my-24">
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto '>Detail Kapal</h1>
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto '>{data.author}</p>
            </div>
        </div>
        <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
            <Image className='border-4 border-white' src={data.image} width={330} height={200} alt='' />
            <h2 className='my-8 text-[26px] font-semibold '>Nama Kapal : {data.nama_kapal}</h2>
            <h2 className='my-8 text-[26px] font-semibold '>Jenis Kapal : {data.jenis_kapal}</h2>
            <h2 className='my-8 text-[26px] font-semibold '>Kapasitas Muatan :{data.kapasitas_muatan} </h2>
            <h2 className='my-8 text-[26px] font-semibold '>Waktu Terdaftar :  {data.waktu_terdaftar}</h2>
        
            <div className="my-24">
                <p className='text-black font font-semibold my-4'>Share This Article On Sosial Media</p>
                <div className="flex">
                    <Image src={assets.facebook_icon} width={50} alt='' />
                    <Image src={assets.twitter_icon} width={50} alt='' />
                    <Image src={assets.googleplus_icon} width={50} alt='' />
                </div>
            </div>
        </div>
        <Footer />
    </> : <></>
    )
}

export default page