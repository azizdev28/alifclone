"use client";
import { logo } from "@/assets";
import catalogState from "@/store/catalog";
import useTheme from "@/store/useTheme";

import Image from "next/image";
import Link from "next/link";
import Catalog from "./Catalog";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";

const Header = () => {
  const { toggleTheme } = useTheme();
  const { openCatalog, toggleCatalog } = catalogState();
  return (
    <>
      <div className="h-[75px] fixed top-0 left-0 right-0 bg-white z-10 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-[112px] h-[32px]" />
          </Link>
          <button
            onClick={toggleCatalog}
            className="flex items-center bg-amber-300	px-12 py-2 rounded-xl gap-4"
          >
            <GiHamburgerMenu />
            <span>Catalog</span>
          </button>
          <form className="flex items-center w-[555px] ">
            <input
              type="text"
              placeholder="Searching..."
              className="w-full py-2.5 px-3 rounded-xl border-amber-300"
            />
            <button className=" bg-amber-300 py-3.5 ml-[-39px] px-3 rounded-r-xl">
              <FaSearch />
            </button>
          </form>
          <button className="flex flex-col">
            <FaCartShopping />
          </button>
          <button className="color-gray">
            <FaRegHeart />
          </button>
          <button onClick={toggleTheme}>Dark / Light</button>
        </div>
      </div>
      {/* catalog */}
      {openCatalog && <Catalog />}
    </>
  );
};

export default Header;
