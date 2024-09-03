import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

import BlogHeader from "../header/blogheader";

export default function Component() {
  const allPostsData = getAllPosts();

  return (
    <div className="text-white mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 flex-col lg:flex-row flex gap-6 justify-between">
      <BlogHeader />

      <main className=" lg:w-3/5 lg:py-24">
        <section id="about" className="mt-24 ">
          <div className="text-wrap flex-col">
            <h2 className="text-2xl font-bold">ABOUT THE BLOG</h2>
            <div className="mt-4 text-slate-300">
              <p className="leading-8 text-lg text-left pt-2">
                Welcome to my tech blog! Here, Ill be sharing my
                journey through the world of tech, focusing mostly on hacking,
                reverse engineering, and some programming. I hope to earn a few certs along the way. Ill do my best to
                stay on track and offer some useful insights, but I can't make
                any promises on the insights part! Anyway if youre here I hope you find something interesting!
              </p>
            </div>
          </div>
        </section>

        <section id="blogs" className="mt-24 card-wrapper">
          <div className="text-wrap flex-col gap-4 ">
            <h2 className="text-2xl font-bold">BLOGS</h2>
            {allPostsData.map(({ slug, title, date, author, thumbnail }) => (
              <div key={slug} className=" drop-shadow-2xl ">
                <Link href={`/blog/${slug}`}>
                  <div className="text-muted-foreground flex-row flex text-left pt-2">
                    <p className="text-lg italic text-lime-300 w-44">{date}</p>

                    <h2 className="text-lg font-bold w-2/3 hover:text-lime-300 ">
                      {title}
                    </h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
