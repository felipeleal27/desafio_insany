/* eslint-disable @next/next/no-img-element */
const Advantages = () => {
    return <div className="py-16">
    <div className="container mx-auto py-20 px-6 md:flex justify-between items-center">
      {/* Coluna Esquerda */}
      <div className="w-full md:w-1/2">
        {/* Título Chamativo com Duas Linhas */}
        <h2 className="text-white text-4xl font-bold mb-8">
          03 vantagens exclusivas <br /> da SmartMoney
        </h2>

        {/* Card 1 - Tecnologia de Ponta (Menor com 2 Linhas de Subtítulo) */}
        <div className="bg-white p-4 rounded-lg shadow-lg mb-8 max-w-xs">
          <h3 className="text-black text-2xl font-semibold">
            Tecnologia de ponta
          </h3>
          <p className="text-gray-500 mt-4 mb-6 text-sm">
            Nullam neque, rutrum et enim diam, ligula fringilla aliquet
            tincidunt ullamcorper elit.
          </p>
          <div className="relative h-2 bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-blue-600"
              style={{ width: "30%" }}
            ></div>
          </div>
        </div>

        {/* Título Menos Chamativo com Subtítulo de 2 Linhas */}
        <h3 className="text-gray-400 text-xl font-semibold mb-4">
          Entrega eficiente
        </h3>
        <p className="text-gray-500 mb-8 text-sm">
          Posuere sollicitudin semper in posuere habitant. Quis luctus et
          egestas viverra pellentesque.
        </p>

        {/* Outro Título e Subtítulo de 2 Linhas */}
        <h3 className="text-gray-400 text-xl font-semibold mb-4">
          Suporte especializado
        </h3>
        <p className="text-gray-500 text-sm">
          In massa, erat felis massa tincidunt. Aliquam, iaculis rutrum in
          mauris, integer.
        </p>
      </div>

      {/* Coluna Direita */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-8 md:mt-0">
        {/* Botão "Quero ser cliente" - Alinhado à Direita */}
        <div className="w-full flex justify-end mb-8">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-200">
            Quero ser cliente
          </button>
        </div>
        {/* Imagens ao Lado com Deslocamento Vertical */}
        <div className="relative mb-8 flex items-center justify-between w-full">
          <img
            src="/images/img1_session5.png"
            alt="Seta 1"
            className="transform translate-x-4 translate-y-4 z-10"
          />
          <img
            src="/images/img2_session5.png"
            alt="Seta 2"
            className="transform translate-x-[-100px] translate-y-40 z-25"
          />

          {/* Botão sobre a imagem */}
          <button className="absolute bg-white text-black px-6 py-3 rounded-full flex items-center justify-center space-x-2 mt-4 z-30 bottom-10 left-[-50px]">
            <span role="img" aria-label="estrela" className="text-xl">
              ⭐
            </span>
            <span>Tecnologia disruptiva</span>
          </button>
        </div>
      </div>
    </div>
  </div>
};

export default Advantages;