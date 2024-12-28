import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { IconButton } from '@mui/material';
import { Search, Menu } from '@mui/icons-material';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';  // Import toast
import variables from '../../styles/variables.scss';
import "../../styles/Navbar.scss";
import { signOut } from 'next-auth/react';
import { assets } from '@/Assets/assets';
import Image from 'next/image'

const Navbar = () => {
  const { data: session, status } = useSession();  // Mendapatkan data session dan status login
  const [dropdownMenu, setDropdownMenu] = useState(false);  // Menangani dropdown menu
  const [search, setSearch] = useState("");  // Menangani input pencarian
  const router = useRouter();
  const dispatch = useDispatch();  // Untuk melakukan logout jika diperlukan

  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Selamat Pagi");
    else if (hours < 18) setGreeting("Selamat Siang");
    else setGreeting("Selamat Malam");
  }, []);

  if (status === "unauthenticated") {
    return null;  // Navbar tidak ditampilkan untuk pengguna yang tidak login
  }

 const handleLogout = async () => {
         try {
             await signOut({ redirect: false });
             toast.success("Logout successful!");
             setTimeout(() => {
                 window.location.href = "/login";
             }, 2000);
         } catch (error) {
             toast.error("An error occurred during logout.");
             console.error(error);
         }
     };

  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link href="/">
          <Image src={assets.logo} alt="logo" />
        </Link>
      </div>

      <div className="navbar_search">
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <IconButton disabled={search === ""}>
          <Search
            sx={{ color: variables.pinkred }}
            onClick={() => {
              router.push(`/properties/search/${search}`);
            }}
          />
        </IconButton>
      </div>

      <div className="navbar_right">
        {session?.user ? (
          <>
            <div className="navbar_right_greeting">
              <p>{greeting}, {session?.user?.name || "admin"}!</p>
            </div>
            <button
              className="navbar_right_account"
              onClick={() => setDropdownMenu(!dropdownMenu)}
            >
              <Menu sx={{ color: variables.darkgrey }} />
              <Image
                src={assets.icon}
                alt="profile photo"
                style={{ objectFit: "cover", borderRadius: "50%" }}
              />
            </button>

            {dropdownMenu && (
              <div className="navbar_right_accountmenu">
                {session.user.role === "user" ? (
                  <>
                    <Link
                      href="/login"
                      onClick={handleLogout} // Gunakan handleLogout saat logout
                    >
                      Log Out
                    </Link>
                  </>
                ) : session.user.role === "admin" ? (
                  <>
                    <Link href="/admin/add-kapal">Tambah Data Kapal</Link>
                    <Link href="/admin/kapal-list">List Data Kapal</Link>
                    <Link
                      href="/login"
                      onClick={handleLogout}// Gunakan handleLogout saat logout
                    >
                      Log Out
                    </Link>
                  </>
                ) : null}
              </div>
            )}
          </>
        ) : (
          <Link href="/login" className="host">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
