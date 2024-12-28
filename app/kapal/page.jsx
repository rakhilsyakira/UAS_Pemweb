'use client'; // Menyatakan ini adalah Client Component

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';  // Mengimpor useSession untuk cek status login
import { useRouter } from 'next/navigation';  // Mengimpor useRouter untuk navigasi
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Penting untuk styling toast
import Navbar from "@/Components/AdminComponents/Navbar"; // Impor Navbar
import { Provider } from "react-redux";  
import { store } from "@/redux/store";  
import Footer from '@/Components/AdminComponents/Footer';
import Listing from '@/Components/Listings';

const page = () => {

  return (
    <Provider store={store}>  
      <ToastContainer theme="dark" />
      <div>
        <Navbar />
        <Listing/>
        <Footer/>
      </div>
    </Provider>
  );
}

export default page;
