
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

import markdownToHtml from "@/lib/markdownToHtml";
import BlogHeader from "@/app/header/blogheader";



export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }) {
  const post = getPostBySlug(params.slug);
  const contentHtml = await markdownToHtml(post.content);
  console.log(contentHtml)
  return (


    <div className="text-white mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 flex-col lg:flex-row flex gap-6 justify-between">
    <BlogHeader/>

    <main className="lg:w-3/5 lg:py-24 px-2">
    <div className="prose mx-auto mt-24">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <div className="text-muted-foreground text-sm mb-4 text-lime-300">
         {new Date(post.date).toLocaleDateString()}
      </div>
      <div className="prose-headings:text-lime-300 custom-markdown-content"  dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
    </main>
  </div>
   
  );
}
