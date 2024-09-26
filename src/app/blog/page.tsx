
"use client";

import { useState } from "react";
import Link from "next/link";
import { blogPosts, BlogPost } from "./_constants/data"; // Adjust the path if necessary
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Rss, BookOpen, Clock, ThumbsUp } from "lucide-react";

export default function BlogListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("date");

  const filteredPosts = blogPosts
    .filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter(
      (post) => categoryFilter === "All" || post.category === categoryFilter,
    )
    .sort((a, b) => {
      if (sortBy === "likes") return b.likes - a.likes;
      if (sortBy === "readTime") return a.readTime - b.readTime;
      return 0; // Default to no sorting (date)
    });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Filters
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <PostCard post={post} key={post.id} />
          ))}
        </div>
      </main>
    </div>
  );
}

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

function Header({ searchTerm, setSearchTerm }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Lorem Ipsum Blog
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">
              <Rss className="mr-2 h-4 w-4" />
              Subscribe
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400" />
              <Input
                className="py-2 pl-10 pr-4"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

interface FiltersProps {
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
}

function Filters({
  categoryFilter,
  setCategoryFilter,
  sortBy,
  setSortBy,
}: FiltersProps) {
  const categories = [
    "All",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  return (
    <div className="mb-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
      <Select value={categoryFilter} onValueChange={setCategoryFilter}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem value={category} key={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select value={sortBy} onValueChange={setSortBy}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="date">Date</SelectItem>
          <SelectItem value="likes">Most Liked</SelectItem>
          <SelectItem value="readTime">Read Time</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

interface PostCardProps {
  post: BlogPost;
}

function PostCard({ post }: PostCardProps) {
  return (
    <Link href={"/blog/" + post.id} className="group">
      <div className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
        <div className="relative h-48 overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
        </div>
        <div className="p-6">
          <Badge className="mb-2" variant="secondary">
            {post.category}
          </Badge>
          <h2 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
            {post.title}
          </h2>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={post.authorAvatar} alt={post.author} />
                <AvatarFallback>
                  {post.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm text-gray-500">{post.author}</span>
            </div>
            <span className="flex items-center text-sm text-gray-400">
              <Clock className="mr-1 h-4 w-4" /> {post.readTime} min read
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center text-sm text-gray-500">
              <BookOpen className="mr-1 h-4 w-4" />{" "}
              {Math.floor(Math.random() * 1000) + 100} reads
            </span>
            <span className="flex items-center text-sm text-gray-500">
              <ThumbsUp className="mr-1 h-4 w-4" /> {post.likes} likes
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
