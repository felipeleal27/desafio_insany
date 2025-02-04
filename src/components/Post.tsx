import React from 'react';
import Image from 'next/image';
import { format } from 'date-fns';
import styled from 'styled-components';

// Definindo o tipo do post
interface PostProps {
  post: {
    title: string;
    date: string;
    imageUrl: string;
    authorAvatarUrl: string;
    authorName: string;
    content: {
      rendered: string;
    };
  };
}

const PostCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
`;

const PostImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const PostDescription = styled.div`
  padding: 16px;
`;

const PostMeta = styled.div`
  font-size: 14px;
  color: #6c757d;
`;

const PostTitle = styled.h3`
  margin: 8px 0;
  font-size: 18px;
  color: #333;
`;

const PostAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

const PostContent = styled.div`
  margin-top: 12px;
  font-size: 14px;
  color: #555;
`;

const Post: React.FC<PostProps> = ({ post }) => {
  const formattedDate = format(new Date(post.date), 'MMMM yyyy');

  return (
    <PostCard>
      {/* Imagem do post */}
      <PostImage
        src={post.imageUrl}
        alt={post.title}
        width={600}
        height={400}
      />
      <PostDescription>
        {/* Topo da descrição com a categoria e a data */}
        <PostMeta>
          <span className="post-category">Business</span> - 
          <span className="post-date">{formattedDate}</span>
        </PostMeta>
        {/* Título do post */}
        <PostTitle>{post.title}</PostTitle>
        {/* Autor */}
        <PostAuthor>
          <img
            className="author-avatar"
            src={post.authorAvatarUrl}
            alt={post.authorName}
          />
          <span>{post.authorName}</span>
        </PostAuthor>
        {/* Conteúdo do post */}
        <PostContent
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </PostDescription>
    </PostCard>
  );
};

export default Post;
