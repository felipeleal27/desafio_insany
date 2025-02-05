/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <img src="/images/logo-smartmoney.png" alt="SmartMoney Logo" className="mr-2 w-[131px] h-[19px]" />
        </div>

        {/* Menu para telas grandes */}
        <nav className="hidden md:flex space-x-6 text-gray-300">
          <Link className='linkHeader' href="#">Quem somos</Link>
          <Link className='linkHeader' href="#">Soluções</Link>
          <Link className='linkHeader' href="#">Carreira</Link>
          <Link className='linkHeader' href="#">Contato</Link>
          <Link className='linkHeader' href="#">Suporte</Link>
        </nav>

        {/* Botão Cadastro */}
        <Link href="#" className="hidden md:block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-blue-700 hover:text-white">
          Cadastre-se
        </Link>

        {/* Ícone do menu mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <nav className="md:hidden flex flex-col bg-gray-800 text-white p-4 space-y-3 absolute top-full left-0 w-full shadow-lg">
          <Link className='linkHeader' href="#" onClick={() => setIsOpen(false)}>Quem somos</Link>
          <Link className='linkHeader' href="#" onClick={() => setIsOpen(false)}>Soluções</Link>
          <Link className='linkHeader' href="#" onClick={() => setIsOpen(false)}>Carreira</Link>
          <Link className='linkHeader' href="#" onClick={() => setIsOpen(false)}>Contato</Link>
          <Link className='linkHeader' href="#" onClick={() => setIsOpen(false)}>Suporte</Link>
          <Link href="#" className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-blue-700 hover:text-white text-center" onClick={() => setIsOpen(false)}>
            Cadastre-se
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
