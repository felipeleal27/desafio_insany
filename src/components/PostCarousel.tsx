import React, { useState, useEffect } from 'react';
import { Post } from '../types/Post'; // Certifique-se de que o tipo está importado corretamente

const PostCarousel: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]); // Inicializando como array vazio

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://devblog.insanydesign.com/wp-json/wp/v2/posts/');
        const data: Post[] = await response.json();  // Tipo Post para garantir que é um array
        setPosts(data);  // Atualizando o estado com os posts da API
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };

    fetchPosts();
  }, []);  // O useEffect vai rodar apenas uma vez, quando o componente for montado.

  // Se posts ainda não estiverem carregados, mostre "Carregando..."
  if (!posts || posts.length === 0) {
    return <div>Carregando posts...</div>;
  }

  const postsPerPage = 5;
  const currentPage = 0;  // Exemplo: página 0

  const startIndex = currentPage * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="post-carousel">
      {currentPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <p>{post.excerpt.rendered}</p>
        </div>
      ))}
    </div>
  );
};

export default PostCarousel;
