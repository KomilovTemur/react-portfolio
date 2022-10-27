import React from "react";
import { FaGithub, FaTelegram, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          GitHub
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/KomilovTemur/",
    },
    {
      id: 2,
      child: (
        <>
          Instagram
          <FaInstagram size={30} />
        </>
      ),
      href: "https://instagram.com/tim_coder",
    },
    {
      id: 3,
      child: (
        <>
          Telegram
          <FaTelegram size={30} />
        </>
      ),
      href: "https://t.me/tim_coder",
    },
    {
      id: 4,
      child: (
        <>
          Mail
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:temurkomilov479@gmail.com",
    },
    // {
    //   id: 5,
    //   child: (
    //     <>
    //       Resume
    //       <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: "mailto:temurkomilov479@gm",
    //   download: true,
    // },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className="flex justify-center items-center hover:ml-[-10px] hover:rounded-md duration-300 w-40 h-14 px-4 ml-[-100px] bg-gray-500"
          >
            <a
              className="flex justify-between items-center w-full text-white"
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
