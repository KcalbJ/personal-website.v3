import SocialLinks from "./SocialsLinks";
import Link from "next/link";

import { BsCpu } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { GiBrokenShield } from "react-icons/gi";

import { FaTerminal } from "react-icons/fa6";
function BlogHeader() {
  
  return (
<header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen  lg:w-2/5 w-full text-left lg:flex-col lg:py-24">
        <div className="text-wrap">
          <Link href="/" className="flex flex-row">
            <FaTerminal className="h-10 w-10 self-center text-lime-300" />
            <h1 className="text-6xl lg:text-7xl pb-2 tracking-tight font-bold">
              Bl4ckPXL
            </h1>
          </Link>
          <h2 className="text-6xl lg:text-7xl font-bold mx-auto tracking-tight text-lime-300">
            Tinkering Blog
          </h2>
          <h2 className="text-3xl font-medium lg:mt-16 mt-6 mx-auto tracking-tight text-slate-300">
            Software Breaker
          </h2>
        </div>
        <div className="flex flex-row gap-4 mt-4 ">
          <Link href="/" className="hover:text-lime-300 underline underline-offset-4">
            <span>HOME</span>
          </Link>
          <Link href="/blog" className="hover:text-lime-300 underline underline-offset-4">
            <span>BLOG</span>
          </Link>
        </div>
        <SocialLinks />

        <div className="flex items-center text-lg flex-row gap-4 mt-6">
          <FaCode className="h-5 w-5 text-lime-300" />
          <span>Programming</span>
        </div>

        <div className="flex items-center text-lg flex-row gap-4">
          <BsCpu className="h-5 w-5 text-lime-300" />
          <span>Reverse Engineering</span>
        </div>
        <div className="flex items-center text-lg flex-row gap-4">
          <GiBrokenShield className="h-5 w-5 text-lime-300" />
          <span className="text-lg">Hacking</span>
        </div>
      </header>
    )}

export default BlogHeader;
