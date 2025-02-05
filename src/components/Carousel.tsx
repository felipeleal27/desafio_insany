/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  
  const [posts, setPosts] = useState<
    { 
      id: number; 
      title: { rendered: string };
      date: string; 
      excerpt: { rendered: string };
      featured_media_url: string;
      author_avatar_url: string;
      author_name: string;
      link: string;
    }[]
  >([]);

  const totalItems = posts.length;

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("https://devblog.insanydesign.com/wp-json/wp/v2/posts/");
        const data = await response.json();
        console.log("API Posts Response:", data);

        const postsWithDetails = await Promise.all(
          data.map(async (post: any) => {
            // Buscar imagem destacada
            let featured_media_url = "/images/img1_session4.png";
            if (post.featured_media) {
              try {
                const mediaResponse = await fetch(`https://devblog.insanydesign.com/wp-json/wp/v2/media/${post.featured_media}`);
                const mediaData = await mediaResponse.json();
                featured_media_url = mediaData.source_url || featured_media_url;
              } catch (error) {
                console.error("Erro ao buscar imagem:", error);
              }
            }

            // Buscar avatar do autor
            let author_avatar_url = "/images/img2_session4.png";
            let author_name = "Desconhecido";
            if (post.author) {
              try {
                const authorResponse = await fetch(`https://devblog.insanydesign.com/wp-json/wp/v2/users/${post.author}`);
                const authorData = await authorResponse.json();
                author_avatar_url = authorData.avatar_urls?.["96"] || author_avatar_url;
                author_name = authorData.name || author_name;
              } catch (error) {
                console.error("Erro ao buscar autor:", error);
              }
            }

            return {
              id: post.id,
              title: post.title,
              date: post.date,
              excerpt: post.excerpt,
              featured_media_url,
              author_avatar_url,
              author_name,
              link: post.link,
            };
          })
        );

        setPosts(postsWithDetails);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    }

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
                <a href={`/posts/${post.id}`} target="_blank" rel="noopener noreferrer" className="block bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
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
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
