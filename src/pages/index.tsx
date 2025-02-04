/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Carousel from "@/components/Carousel";
import FAQSection from "@/components/FACSection";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const [, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://devblog.insanydesign.com/wp-json/wp/v2/posts/"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    }
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="mt-20">
        {/* Primeira Sessão */}
        <div
          className="min-h-screen bg-gray-900 flex items-center justify-center p-4"
          style={{
            backgroundImage: "url(/images/mask_group.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
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
                <span className="text-gray-700 text-sm">
                  Seus dados estão seguros
                </span>
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
                alt="Imagem do grupo"
                className="w-16 self-start"
              />
            </div>
          </div>
        </div>
        {/* Terceira Sessão */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* Card 1 */}
            <div className="flex flex-col items-start text-left">
              <img
                src="/images/img1_session3.png"
                alt="Ícone 1"
                className="w-16 h-16 mb-4 self-start"
              />
              <h3 className="text-xl font-bold text-black">
                Fim da complexidade
              </h3>
              <p className="text-gray-600">
                Amet, leo turpis facilisi nam fusce nunc molestie. Orci, nibh
                auctor lacus eleifend tincidunt sceleris
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-start text-left">
              <img
                src="/images/img2_session3.png"
                alt="Ícone 2"
                className="w-16 h-16 mb-4 self-start"
              />
              <h3 className="text-xl font-bold text-black">Sem burocracia</h3>
              <p className="text-gray-600">
                Eu arcu arcu vitae ipsum sed. Purus volutpat laoreet sed nisi,
                imperdiet sit aliquam viverra.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-start text-left">
              <img
                src="/images/img3_session3.png"
                alt="Ícone 3"
                className="w-16 h-16 mb-4 self-start"
              />
              <h3 className="text-xl font-bold text-black">Tudo digital</h3>
              <p className="text-gray-600">
                Dictum mi risus auctor donec et amet duis tincidunt gravida.
                Tellus amet, porttitor quis mauris.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col items-start text-left">
              <img
                src="/images/img4_session3.png"
                alt="Ícone 4"
                className="w-16 h-16 mb-4 self-start"
              />
              <h3 className="text-xl font-bold text-black">
                Evolução constante
              </h3>
              <p className="text-gray-600">
                Commodo egestas dolor, sapien nam posuere at. Ultrices dictum
                cras vel gravida gravida vehicula{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Sessão 4 - Carrossel */}
        <div className="App">
          <Carousel />
        </div>
        <div className="py-16">
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
        {/* Sessão 6 - Fundo com Imagem */}
        <div className="bg-gray-100 py-16 px-6">
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
        {/* Sessão 7 - Questions */}
        <div className="bg-gray-200 py-16 px-6">
          <FAQSection />
        </div>
        <div
          className="relative bg-cover bg-center  py-16"
          style={{ backgroundImage: "url('/images/bg_footer.png')" }}
        >
          <Footer />
        </div>
      </main>
    </>
  );
}
