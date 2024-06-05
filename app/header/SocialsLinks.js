import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";



function SocialLinks() {
  return (
    <div className=" py-6  mt-6 flex ">
      <ul className=" flex flex-row gap-10 lg:text-left ">
        <li>
          <a href="https://github.com/KcalbJ" rel="noreferrer" target="_blank"
           aria-label="github opens in new tab"
           title="GitHub">
            <FaGithub className="w-8 h-8  hover:text-lime-300" />
          </a>
        </li>
        <li>
          <a
            href="mailto:jblack.create@gmail.com"
            rel="noreferrer"
            target="_blank"
            aria-label="Email opens in new tab"
           title="Email Address">
          
            <IoMail className="w-8 h-8 hover:text-lime-300" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/jblack-dev"
            rel="noreferrer"
            target="_blank"
            aria-label="Linked In opens in new tab"
            title="LinkedIn"
          >
            <FaLinkedin className="w-8 h-8 hover:text-lime-300" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
