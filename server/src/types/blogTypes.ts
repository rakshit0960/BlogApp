export interface Author {
  id: number;
  name: string;
}

export interface ContentBlock {
  type: 'header' | 'paragraph' | 'image' | 'video' | 'code';
  content?: string;
  level?: number;
  src?: string;
  alt?: string;
  poster?: string;
  language?: string;
  layout?: {
    width: 'full' | 'half' | 'third';
    alignment: 'left' | 'center' | 'right';
  };
}

export interface BlogPost {
  id: number;
  title: string;
  author: Author;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  content: ContentBlock[];
  metadata: {
    views: number;
    likes: number;
    featured: boolean;
  };
}