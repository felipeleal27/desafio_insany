import Link from 'next/link'; // Importe o Link corretamente

const Header = () => {
  return (
    <header className="w-full bg-gray-900 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <img src="/images/logo-smartmoney.png" alt="SmartMoney Logo" className="mr-2" />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-300">
          <Link href="#">Quem somos</Link>
          <Link href="#">Soluções</Link>
          <Link href="#">Carreira</Link>
          <Link href="#">Contato</Link>
          <Link href="#">Suporte</Link>
        </nav>

        {/* Botão Cadastro */}
        <Link href="#" className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-blue-700 hover:text-white">
          Cadastre-se
        </Link>
      </div>
    </header>
  );
};

export default Header;
