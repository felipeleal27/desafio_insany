import { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para o índice atual
  const [posts, setPosts] = useState([]); // Estado para armazenar os posts da API
  const totalItems = posts.length; // Número total de itens no carrossel (dinâmico)

  // Função para ir para o próximo item
  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // Função para voltar para o item anterior
  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  // Função para buscar os dados da API
  async function fetchPosts() {
    try {
      const response = await fetch("https://devblog.insanydesign.com/wp-json/wp/v2/posts/");
      const data = await response.json();
      console.log(data);  // Para debug, veja o que está sendo retornado pela API
      setPosts(data);  // Atualiza o estado com os dados dos posts
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  }

  // useEffect para chamar a função de busca quando o componente for montado
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Títulos da Sessão 4 */}
        <div>
          <h2 className="text-blue-600 font-bold text-xl">Nosso blog</h2>
          <h3 className="text-black text-3xl font-semibold mt-2">
            Notícias do mundo da tecnologia
          </h3>
        </div>

        {/* Setas de navegação */}
        <div className="flex justify-between items-center">
          <span
            onClick={prevItem}
            className="text-3xl text-blue-600 cursor-pointer"
          >
            &lt;
          </span>
          <span
            onClick={nextItem}
            className="text-3xl text-blue-600 cursor-pointer"
          >
            &gt;
          </span>
        </div>

        {/* Carrossel de Posts */}
        <div className="relative overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`, // Mover o carrossel de acordo com o índice
            }}
          >
            {posts.map((post, index) => (
              <div key={post.id} className="flex-none w-72 mx-4"> {/* Adicionando margem entre os cards */}
                <div className="bg-gray-100 rounded-lg shadow-md">
                  <img
                    src={post.featured_media_url || '/images/img1_session4.png'}
                    alt={`Post ${index + 1}`}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h4 className="text-blue-600 font-bold">
                      {post.title.rendered}
                    </h4>
                    <p className="text-black">{new Date(post.date).toLocaleDateString()}</p>
                    <p className="text-gray-700 mt-2">
                      {post.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "") || 'Descrição do post não disponível'}
                    </p>

                    {/* Avatar e nome do autor */}
                    <div className="flex items-center mt-4">
                      <img
                        src={post.author_avatar_url || '/images/img2_session4.png'}
                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                      />
                      <div className="ml-3">
                        <p className="text-black font-semibold">{post.author_name}</p>
                        <p className="text-sm text-gray-600">Autor</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Link para o post completo */}
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 mt-4 block text-center">
                  Ler mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
