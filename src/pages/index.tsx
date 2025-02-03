import Header from "../components/Header";

export default function Home() {
    return (
      <>
        <Header />
        <main className="mt-20">
          {/* Primeira Sessão */}
          <div
            className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
            style={{
              backgroundImage: 'url(/images/mask_group.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
              {/* Parte Esquerda */}
              <div className="flex-1 flex flex-col justify-center">
                <h1 className="text-6xl font-bold text-white mb-4">
                  Conta digital que não é só uma conta digital.
                </h1>
                <p className="text-white mb-6">
                  Pellentesque rutrum turpis non est turpis pretium morbi urna.
                </p>
                <div className="w-10 border-t-2 border-blue-500 mb-6"></div>
                <div className="flex flex-wrap gap-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">120</span>
                    <span className="text-white">Projeto realizado 2021</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">12</span>
                    <span className="text-white">Escritórios no Brasil</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">15mi</span>
                    <span className="text-white">Faturamento 2021</span>
                  </div>
                </div>
              </div>
  
              {/* Parte Direita - Container do Formulário */}
              <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-96">
                <p className="text-sm text-gray-600 mb-2">
                  Faça parte da revolução digital!
                </p>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Cadastre-se e faça parte do lançamento oficial
                </h2>
  
                <div className="flex space-x-4 mb-6">
                  <label className="flex items-center text-black">
                    <input type="radio" name="tipo" className="mr-2" />
                    Para você
                  </label>
                  <label className="flex items-center text-black">
                    <input type="radio" name="tipo" className="mr-2" />
                    Para empresa
                  </label>
                </div>
  
                <form className="flex flex-col space-y-4">
                  <input
                    type="text"
                    placeholder="Nome"
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Celular"
                    className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                  >
                    Quero ser cliente
                  </button>
                </form>
  
                <div className="mt-6 p-4 bg-gray-100 rounded shadow">
                  <p className="text-sm text-gray-700">
                    Ao enviar seus dados, você autoriza que o SmartMoney entre em
                    contato e declara estar ciente da{" "}
                    <a href="#" className="underline text-blue-600">
                      Política de Privacidade
                    </a>
                  </p>
                </div>
  
                <div className="mt-4 flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                  </svg>
                  <span className="text-gray-700 text-sm">Seus dados estão seguros</span>
                </div>
              </div>
            </div>
          </div>
  
          {/* Segunda Sessão */}
          <div className="bg-white py-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 relative">
              {/* Parte Esquerda */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold text-black mb-4">
                  Conheça nossas soluções customizadas
                </h2>
                <p className="text-gray-700 mb-6">
                  Suscipit pellentesque praesent auctor molestie massa nunc vitae felis
                  eget est ut gravida in maecenas. Tempus in in in congue proin.
                </p>
  
                {/* Ícones com texto */}
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center">
                  <img
                    src="/svg/check.svg"
                    alt="Ícone do celular"
                    className="w-6 h-6 mr-2"
                    />

                    <span className="ml-4 text-gray-700">
                      Sagittis sed cursus sed malesuada ultrices
                    </span>
                  </div>
                  <div className="flex items-center">
                  <img
                    src="/svg/check.svg"
                    alt="Ícone do celular"
                    className="w-6 h-6 mr-2"
                    />
                    <span className="ml-4 text-gray-700">
                      Lectus ac at massa ac tellus fringilla aenean
                    </span>
                  </div>
                  <div className="flex items-center">
                  <img
                    src="/svg/check.svg"
                    alt="Ícone do celular"
                    className="w-6 h-6 mr-2"
                    />
                    <span className="ml-4 text-gray-700">
                      Cras faucibus tristique volutpat accumsan
                    </span>
                  </div>
                </div>
  
                <button className="bg-blue-600 text-white py-2 px-6 rounded-full mt-6 hover:bg-blue-700 transition">
                  Quero ser cliente
                </button>
  
                {/* Ícone de Fale Conosco */}
                <div className="mt-6 flex items-center text-blue-600">
                <img
                src="/svg/icon_cell_svg.svg"
                alt="Ícone do celular"
                className="w-6 h-6 mr-2"
                />

                  <span>Fale Conosco</span>
                </div>
              </div>
              
  
              <img
                  src="/images/img_session2.png"
                  alt="Imagem de Grupo"
                  className="w-fit h-fit mb-6"
                />
              {/* Card Elevado */}
            <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-lg shadow-xl flex flex-col items-center w-80">
            <div className="flex justify-between w-full">
                <span className="text-2xl text-black font-bold">R$ 999,90</span>
                <svg
                className="w-6 h-6 text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                >
                <path d="M12 3v18M2 12h20" />
                </svg>
            </div>
            <h3 className="text-x2 text-black font-semibold mb-2 text-left w-full">Balançaço</h3>
            <div className="w-full border-t border-gray-300 my-4"></div>
            <img src="/images/group_482104.png" alt="Imagem do grupo" className="w-16 self-start" />
            </div>
            </div>
          </div>
        </main>
      </>
    );
  }
  
