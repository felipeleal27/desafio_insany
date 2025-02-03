export interface Post {
    id: number;
    date: string;
    title: {
      rendered: string;
    };
    excerpt: {
      rendered: string;
    };
    featured_media: number;
    link: string;
    author: number;
  }
  