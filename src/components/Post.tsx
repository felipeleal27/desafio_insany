import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';

// Definindo o tipo do post
interface PostProps {
  post: {
    title: string;
    date: string;
    imageUrl: string;
    authorAvatarUrl: string;
    authorName: string;
    content: {
      rendered: string; // Certifique-se de que isso seja uma string
    };
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  // Formatação da data
  const formattedDate = format(new Date(post.date), 'MMMM yyyy');

  return (
    <div className="post-card">
      {/* Imagem do post */}
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={300}
        height={200}
        objectFit="cover"
      />
      <div className="post-description">
        {/* Topo da descrição com a categoria e a data */}
        <div className="post-meta">
          <span className="post-category">Business</span> - 
          <span className="post-date">{formattedDate}</span>
        </div>
        {/* Título do post */}
        <h3 className="post-title">{post.title}</h3>
        {/* Autor */}
        <div className="post-author">
          <img
            className="author-avatar"
            src={post.authorAvatarUrl}
            alt={post.authorName}
          />
          <span>{post.authorName}</span>
        </div>
        {/* Conteúdo do post */}
        {/* Garantir que post.content.rendered é uma string */}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: String(post.content.rendered) }}
        />
      </div>
    </div>
  );
};

export default Post;
