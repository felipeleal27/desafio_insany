// components/PostCarousel.js
import React, { useState } from 'react';
import Post from './Post';

const PostCarousel = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3;

  // Função para mostrar a página seguinte
  const nextPage = () => {
    if (currentPage < Math.ceil(posts.length / postsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Função para mostrar a página anterior
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="post-carousel">
      <div className="post-carousel-content">
        {/* Renderizando os posts */}
        {currentPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>

      {/* Navegação */}
      <div className="carousel-nav">
        <button onClick={prevPage} disabled={currentPage === 0}>
          &lt;
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage >= Math.ceil(posts.length / postsPerPage) - 1}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PostCarousel;
