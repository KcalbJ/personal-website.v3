import SocialLinks from "./SocialsLinks";
import Link from "next/link";
function Header() {
  
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen  lg:w-2/5 w-full text-left lg:flex-col lg:py-24 ">
      <div className="text-wrap">
        
        <h1 className="text-6xl lg:text-7xl pb-2 tracking-tight font-bold">
          HEY, IM<br></br> <Link href="/">  <span className="text-lime-300">JAMES BLACK</span></Link>
          </h1>
        
        <h2 className="text-3xl font-medium lg:mt-16 mt-6 mx-auto tracking-tight text-slate-300">
          Software Developer
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
      <div className="flex flex-wrap w-full mt-6 gap-4">
        <div className="p-0.5 mb-2 text-sm rounded-md overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 text-slate-200">
          <p className="px-4 py-2 bg-gray-800 rounded-md">Javascript</p>
        </div>
        <div className="p-0.5 mb-2 text-sm rounded-md overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 text-slate-200">
          <p className="px-4 py-2 bg-gray-800 rounded-md">React</p>
        </div>
        <div className="p-0.5 mb-2 text-sm rounded-md overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 text-slate-200">
          <p className="px-4 py-2 bg-gray-800 rounded-md">Node</p>
        </div>
        <div className="p-0.5 mb-2 text-sm rounded-md overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 text-slate-200">
          <p className="px-4 py-2 bg-gray-800 rounded-md">TailwindCss</p>
        </div>
        <div className="p-0.5 mb-2 text-sm rounded-md overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 text-slate-200">
          <p className="px-4 py-2 bg-gray-800 rounded-md">Postgress</p>
        </div>
        <div className="p-0.5 mb-2 text-sm rounded-md overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 text-slate-200">
          <p className="px-4 py-2 bg-gray-800 rounded-md">Express</p>
        </div>
        <div className="p-0.5 mb-2 text-sm rounded-md overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 text-slate-200">
          <p className="px-4 py-2 bg-gray-800 rounded-md">Nextjs</p>
        </div>
        <div className="p-0.5 mb-2 text-sm rounded-md overflow-hidden bg-gradient-to-br from-teal-300 to-lime-300 text-slate-200">
          <p className="px-4 py-2 bg-gray-800 rounded-md">Python</p>
        </div>
      </div>
    </header>
    )}

export default Header;
