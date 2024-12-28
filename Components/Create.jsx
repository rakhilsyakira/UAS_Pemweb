'use client'
import { assets } from '@/Assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Create = () => {
  const [image, setImage] = useState(false); // Initial state should be null
  const [data, setData] = useState({
    nama_kapal: "",
    kapasitas_muatan: "",
    jenis_kapal: "Feri",
    waktu_terdaftar: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
    console.log(data);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("nama_kapal", data.nama_kapal);
      formData.append("kapasitas_muatan", data.kapasitas_muatan);
      formData.append("jenis_kapal", data.jenis_kapal);
      formData.append("waktu_terdaftar", data.waktu_terdaftar);
      formData.append("image", image);
  
      const response = await axios.post('/api/kapal', formData);
      if (response.data.success) {
        toast.success(response.data.msg);
      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.error("Error saat submit form:", error);
      toast.error("Terjadi kesalahan saat mengirim data");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
      <p className="text-xl">Upload Thumbnail</p>
      <label htmlFor="image">
        <Image
          className="mt-4"
          src={!image ? assets.upload_area : URL.createObjectURL(image)}
          width={140}
          height={70}
          alt="Upload Area"
        />
      </label>
      <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
      <p className="text-xl mt-4">Nama Kapal</p>
      <input
        name="nama_kapal"
        onChange={onChangeHandler}
        value={data.nama_kapal}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="text"
        placeholder="Type Here"
        required
      />
      <p className="text-xl mt-4">Kapasitas Muatan</p>
      <input
        name="kapasitas_muatan"
        onChange={onChangeHandler}
        value={data.kapasitas_muatan}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="number"
        placeholder="Type here"
        min="0.01"
        step="any"
        required
      />
      <p className="text-xl mt-4">Jenis Kapal</p>
      <select
        name="jenis_kapal"
        onChange={onChangeHandler}
        value={data.jenis_kapal}
        className="w-40 mt-4 px-4 py-3 border text-gray-500"
      >
        <option value="Feri">Kapal Feri</option>
        <option value="Pesiar">Kapal Pesiar</option>
        <option value="Kargo">Kapal Kargo</option>
        <option value="Penumpang">Kapal Penumpang</option>
      </select>
      <p className="text-xl mt-4">Waktu Terdaftar</p>
      <input
        name="waktu_terdaftar"
        onChange={onChangeHandler}
        value={data.waktu_terdaftar}
        className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
        type="date"
        required
      />
      <br />
      <button
        type="submit"
        className="mt-8 w-40 h-12 bg-black text-white"
      >
        Tambah
      </button>
    </form>
  );
};

export default Create;
