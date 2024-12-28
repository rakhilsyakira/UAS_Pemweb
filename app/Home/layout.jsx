'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "../Providers";
import { Provider } from "react-redux";  // Import Provider dari react-redux
import { store } from "@/redux/store";  // Pastikan store sudah benar di path ini

export default function Layout({ children }) {
    return (
        <>
            <AuthProvider>
                <Provider store={store}>
                    <div className="flex">
                        <ToastContainer theme="dark" />
                        <div className="flex flex-col w-full">
                            {children}
                        </div>
                    </div>
                </Provider>
            </AuthProvider>

        </>
    )
}