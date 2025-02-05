/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
const Details = () => {
    return <div className="bg-white py-16">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 relative">
                {/* Parte Esquerda */}
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-black mb-4">
                    Conheça nossas soluções customizadas
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Suscipit pellentesque praesent auctor molestie massa nunc vitae
                    felis eget est ut gravida in maecenas. Tempus in in in congue
                    proin.
                  </p>
    
                  {/* Ícones com texto */}
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center">
                      <Image
                        src="/svg/check.svg"
                        alt="Ícone do celular"
                        width={24}
                        height={24}
                        className="w-6 h-6 mr-2"
                      />
    
                      <span className="ml-4 text-gray-700">
                        Sagittis sed cursus sed malesuada ultrices
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/svg/check.svg"
                        alt="Ícone do celular"
                        width={24}
                        height={24}
                        className="w-6 h-6 mr-2"
                      />
                      <span className="ml-4 text-gray-700">
                        Lectus ac at massa ac tellus fringilla aenean
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Image
                        src="/svg/check.svg"
                        alt="Ícone do celular"
                        width={24}
                        height={24}
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
                    <Image
                      src="/svg/icon_cell_svg.svg"
                      alt="Ícone do celular"
                      width={24}
                      height={24}
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
                  <h3 className="text-x2 text-black font-semibold mb-2 text-left w-full">
                    Balançaço
                  </h3>
                  <div className="w-full border-t border-gray-300 my-4"></div>
                  <img
                    src="/images/group_482104.png"
                    alt="Ícone da Balança"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
};

export default Details;