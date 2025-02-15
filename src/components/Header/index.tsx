import { useUserContext } from "../../context";
import { LuMenu } from "react-icons/lu";
import { Link } from "../Link";
import React, { useState } from "react";
import Sidebar from "../Menu";

export function Header() {
  const { username } = useUserContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="text-white p-4 h-32 md:h-24 flex justify-evenly flex-col gap-5 md:flex-row md:justify-between items-center bg-white shadow-sm">
      <div className="w-full md:w-1/4 h-full flex md:justify-evenly">
        <div className="w-2/5 md:w-1/3 h-full flex items-center justify-start md:justify-center">
          <button onClick={toggleMenu}>
            <LuMenu className="w-6 h-6 text-gray-600 font-semibold" />
          </button>
        </div>
        <div className="w-1/2 md:w-2/3 h-full flex justify-start">
          <img src="/logo.svg" alt="logotipo da Teddy" />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-around items-center max-w-lg flex-wrap">
        <Link href="/clients">Clientes</Link>
        <Link href="/clients-selected">Clientes Selecionados</Link>
        <Link href="/">Sair</Link>
      </div>
      <div className="hidden md:flex w-1/4 h-full">
        <p className="text-black- font-medium flex items-center justify-end gap">
          Olá,
          <span className="ml-1 font-semibold whitespace-nowrap">
            {username}
          </span>
        </p>
      </div>
      <Sidebar isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
