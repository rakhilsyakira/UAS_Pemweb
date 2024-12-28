import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ListingCard = ({ nama_kapal, jenis_kapal, kapasitas_muatan, waktu_terdaftar, image, id }) => {
    
    // Format the 'waktu_terdaftar' date
    const formattedDate = new Date(waktu_terdaftar).toLocaleDateString('id-ID', {
        weekday: 'long', // Full day of the week (e.g., Monday)
        day: '2-digit',  // 2-digit day (e.g., 05)
        month: 'long',   // Full month name (e.g., Januari)
        year: 'numeric', // Full year (e.g., 2024)
    });

    return (
        <div className='max-w-[250px] sm:max-w[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
            <Link href={`/kapal/${id}`}>
                <Image src={image} alt='image' width={400} height={400} className='border-b border-black' />
            </Link>
            <h3 className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{jenis_kapal}</h3>
            <div className="p-5">
                <h4 className='mb-2 text-lg font-medium tracking-tight text-gray-900'> Nama Kapal       : {nama_kapal}</h4>
                <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'> Kapasitas Muatan : {kapasitas_muatan}</h5>
                <h6 className='text-lg font-medium tracking-tight text-gray-900'> Waktu Terdaftar  : {formattedDate}</h6>
            </div>
        </div>
    )
}

export default ListingCard;
