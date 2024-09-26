
// data.ts

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: number;
  likes: number;
  author: string;
  authorAvatar: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    category: "Dolor",
    readTime: 5,
    likes: 120,
    author: "John Doe",
    authorAvatar: "/placeholder.svg",
    date: "Sep 25, 2024",
    content: `
        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.
        </p>
        <h2>Subheading 1</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
        <blockquote>
          "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
        </blockquote>
        <h2>Subheading 2</h2>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
        </p>
        <ul>
          <li>Item one</li>
          <li>Item two</li>
          <li>Item three</li>
        </ul>
      `,
  },
  {
    id: 2,
    title: "Consectetur Adipiscing Elit",
    category: "Consectetur",
    readTime: 7,
    likes: 89,
    author: "Jane Smith",
    authorAvatar: "/placeholder.svg",
    date: "Oct 10, 2024",
    content: `
        <p class="lead">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <!-- Additional content -->
      `,
  },
  // Add more blog posts as needed
];
