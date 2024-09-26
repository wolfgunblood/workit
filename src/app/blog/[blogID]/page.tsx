
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { blogPosts } from "../_constants/data"; // Adjust the path if necessary
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Send,
} from "lucide-react";

export default function BlogPost({ params }: any) {
  const router = useRouter();
  const id = params.blogID;
  const blogPost = blogPosts.find((post) => post.id === Number(id));

  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [comment, setComment] = useState("");

  const handleLike = () => setIsLiked(!isLiked);
  const handleBookmark = () => setIsBookmarked(!isBookmarked);
  const handleCommentSubmit = () => {
    console.log("Comment submitted:", comment);
    setComment("");
  };

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-indigo-600 transition-colors duration-300 hover:text-indigo-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
                {blogPost.title}
              </h1>
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10 ring-2 ring-white">
                  <AvatarImage
                    src={blogPost.authorAvatar}
                    alt={blogPost.author}
                  />
                  <AvatarFallback>
                    {blogPost.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-white">
                    {blogPost.author}
                  </p>
                  <p className="text-sm text-gray-300">
                    {blogPost.date} • {blogPost.readTime} min read
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex space-x-2">
                <Badge>{blogPost.category}</Badge>
                {/* Add more badges if necessary */}
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleLike}
                  className={isLiked ? "text-red-500" : ""}
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleBookmark}
                  className={isBookmarked ? "text-yellow-500" : ""}
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div
              className="prose prose-indigo max-w-none"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </article>
        <Separator className="my-12" />
        <CommentsSection
          comment={comment}
          setComment={setComment}
          handleCommentSubmit={handleCommentSubmit}
        />
        <RelatedArticles currentPostId={blogPost.id} />
      </main>
    </div>
  );
}

interface CommentsSectionProps {
  comment: string;
  setComment: (value: string) => void;
  handleCommentSubmit: () => void;
}

function CommentsSection({
  comment,
  setComment,
  handleCommentSubmit,
}: CommentsSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Comments</h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Your Avatar" />
            <AvatarFallback>YA</AvatarFallback>
          </Avatar>
          <div className="flex-grow">
            <Textarea
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full"
            />
            <Button onClick={handleCommentSubmit} className="mt-2">
              <Send className="mr-2 h-4 w-4" />
              Post Comment
            </Button>
          </div>
        </div>
        {/* Placeholder for existing comments */}
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Jane Smith" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">Jane Smith</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Great
              article!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface RelatedArticlesProps {
  currentPostId: number;
}

function RelatedArticles({ currentPostId }: RelatedArticlesProps) {
  const relatedPosts = blogPosts
    .filter((post) => post.id !== currentPostId)
    .slice(0, 3);

  return (
    <section>
      <h2 className="mb-6 text-2xl font-bold text-gray-900">
        Related Articles
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {relatedPosts.map((post) => (
          <Link href={'/blog/' + post.id} key={post.id} className="group">
            <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
              <div className="relative h-48 overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600">
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
              </div>
              <div className="p-6">
                <Badge className="mb-2" variant="secondary">
                  {post.category}
                </Badge>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600">
                  {post.content.replace(/<[^>]+>/g, "").substring(0, 100)}
                  ...
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
