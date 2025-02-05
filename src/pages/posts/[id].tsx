/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

let mediaUrl = "/images/img1_session4.png";

export default function PostPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<{
    title: { rendered: string };
    content: { rendered: string };
    date: string;
    excerpt: { rendered: string };
    featured_media_url: string;
    author_avatar_url: string;
    author_name: string;
    link: string;
  } | null>(null);

  useEffect(() => {
    if (!id) return;

    async function fetchPost() {
      try {
        const response = await fetch(
          `https://devblog.insanydesign.com/wp-json/wp/v2/posts/${id}`
        );
        const data = await response.json();
        const mediaResponse = await fetch(`https://devblog.insanydesign.com/wp-json/wp/v2/media/${data.featured_media}`);
        const mediaData = await mediaResponse.json();
        mediaUrl = mediaData.source_url || "/images/img1_session4.png";
        mediaUrl= mediaData.source_url || "/images/img1_session4.png";
        setPost(data);
      } catch (error) {
        console.error("Erro ao carregar post:", error);
      }
    }

    fetchPost();
  }, [id]);

  const limparConteudo = (html: string) => {
    return html.replace(/<p>\s*Aqui está o post completo:\s*<\/p>/i, "");
  };

  if (!post) return <p>Carregando...</p>;

  return (
    <>
    <Header />
    <main className="pt-20 bg-white">
      <div className="max-w-4xl mx-auto bg-white p-8 text-center">
        <h1 className="text-3xl font-bold text-black">{post.title.rendered}</h1>
        <img
          src={mediaUrl || "/images/img1_session4.png"}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div
          className="mt-4 prose text-black"
          dangerouslySetInnerHTML={{
            __html: limparConteudo(post.content.rendered),
          }}
        />
      </div>
    </main>
    <Footer />
    </>
  );
}
