import { useState } from "react";
import Image from "next/image";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }
    setError("");
    // alert("E-mail cadastrado com sucesso!");
    setEmail(""); 
  };

  return (
    <footer 
      className="bg-footer bg-cover bg-center text-white p-10 mt-10" 
      style={{ backgroundImage: "url('/images/bg_footer.png')" }}
    >
      <div className="mx-auto flex flex-wrap justify-between gap-8 px-4 py-5">
        
        {/* Lado Esquerdo */}
        <div className="md:w-1/3 pl-7">
          <Image src="/images/img1_bottom.svg" alt="Ícone" width={32} height={28} className="w-8 h-7" />
          <h2 className="font-bold text-lg mt-4">Fique por dentro das novidades</h2>
          <p className="text-gray-300 mt-2">Cadastre seu e-mail para receber conteúdo</p>
          <div className="mt-4 bg-white p-2 rounded-md flex items-center shadow-md w-[486px] h-[64px]">
            <input
              type="email"
              placeholder="Insira seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 text-gray-600 p-2 outline-none bg-transparent"
            />
            <button 
              onClick={handleSubmit} 
              className="bg-blue-600 text-white px-6 py-2 rounded-md"
            >
              Receber novidades
            </button>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Meio */}
        <div className="w-full md:w-1/6">
          <ul className="space-y-4">
            <li><a href="#" className="text-white hover:text-blue-600">Quero ser cliente</a></li>
            <li><a href="#" className="text-white hover:text-blue-600">Acessar conta</a></li>
            <li><a href="#" className="text-white hover:text-blue-600">Dúvidas</a></li>
            <li><a href="#" className="text-white hover:text-blue-600">Termos e condições</a></li>
            <li><a href="#" className="text-white hover:text-blue-600">Fale conosco</a></li>
          </ul>
        </div>

        {/* Lado Direito */}
        <div className="w-full md:w-1/5">
          <p className="font-bold">Acompanhe nas redes</p>
          <div className="mt-4 space-y-3">
            <div className="flex items-center gap-2">
              <a href="https://x.com/insanydesign" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-600">
                <Image src="/images/icon_twitch.svg" alt="Twitch" width={24} height={24} className="w-6 h-6" />
                <span>Twitch</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://br.linkedin.com/company/insany" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-600">
                <Image src="/images/icon_linkedin.svg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.instagram.com/insanydesign/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-600">
                <Image src="/images/icon_instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />
                <span>Instagram</span>
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="https://www.facebook.com/ola.insanydesign/?locale=pt_BR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-blue-600">
                <Image src="/images/icon_facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Parte de baixo */}
      <div className="mt-8 border-t border-gray-500 pt-4">
        <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto px-4">
          <Image src="/images/logo-smartmoney.png" alt="Logo" width={236.66} height={37.47} />
          <p className="text-gray-300">© 2022 SmartBusiness - Todos os direitos reservados</p>
          <div className="flex items-center gap-2">
            <span className="text-gray-300">🌍</span>
            <span className="text-gray-300">Português</span>
            <span className="text-gray-300">▼</span>
          </div>
          <p className="text-gray-400">Desenvolvido por Insany Design</p>
        </div>
      </div>
    </footer>
  );
}
