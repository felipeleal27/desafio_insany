/* eslint-disable @next/next/no-img-element */
const Contactus = () => {
    return <div className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Lado Esquerdo */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex flex-col items-center px-4 md:px-8 py-8">
          {/* Imagem */}
          <img
            src="/images/img1_session6.png"
            alt="Imagem 1"
            className="mb-6"
          />

          {/* Título Destacante */}
          <h2 className="text-3xl md:text-4xl text-black font-bold text-center mb-4">
            Faça parte do mercado digital financeiro!
          </h2>

          {/* Subtítulo */}
          <p className="text-gray-500 text-center mb-6">
            Pellentesque urna commodo, elementum, est nullam.
          </p>

          {/* Botão */}
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition duration-200">
            Quero ser cliente
          </button>
        </div>

        {/* Divider (vertical) */}
        <div className="hidden md:block w-[1px] bg-gray-300 h-full mx-8" />

        {/* Lado Direito */}
        <div className="w-full md:w-1/3 flex flex-col items-center px-4 md:px-8 py-8">
          {/* Imagem */}
          <img
            src="/images/img2_session6.png"
            alt="Imagem 2"
            className="mb-6"
          />

          {/* Título Destacante */}
          <h2 className="text-3xl md:text-4xl text-black font-bold text-center mb-4">
            Um time de suporte incrível para lhe atender
          </h2>

          {/* Subtítulo */}
          <p className="text-gray-500 text-center mb-6">
            Pellentesque urna commodo, elementum, est nullam.
          </p>

          {/* Botão */}
          <button className="bg-white text-blue-600 px-6 py-3 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition duration-200">
            Fale conosco
          </button>
        </div>
      </div>
    </div>
};

export default Contactus;