import { BsFillPersonCheckFill, BsPersonFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { NavItem } from "./navLink";
import { When } from "../When";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Sidebar = ({ isOpen, toggleMenu }: SidebarProps) => {
  return (
    <>
      <div
        className={`absolute left-0 top-0 h-screen bg-white-2 shadow-xl z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="w-[320px] h-full relative">
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold w-full flex justify-center">
              <img src="/logo.png" alt="logo da teddy " />
            </span>
            <When value={isOpen}>
              <button
                onClick={toggleMenu}
                className="hover:bg-orange-  rounded-full relative bg-black- left-11 p-5"
              >
                <FaArrowLeft
                  size={20}
                  className="text-black- bg-white rounded-2xl p-1"
                />
              </button>
            </When>
          </div>
          <nav className="mt-4">
            <ul className="space-y-3">
              <NavItem href="/" icon={AiFillHome}>
                Início
              </NavItem>
              <NavItem href="/clients" icon={BsPersonFill}>
                Clientes
              </NavItem>
              <NavItem href="/clients-selected" icon={BsFillPersonCheckFill}>
                Clientes selecionados
              </NavItem>
            </ul>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu} />
      )}
    </>
  );
};

export default Sidebar;
