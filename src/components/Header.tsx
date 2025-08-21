import {Link} from 'react-router-dom';
import { useState } from 'react';
export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-[30vh] md:min-h-[70vh]">
        <div className="bg-top bg-origin-border bg-center bg-no-repeat bg-cover bg-[url(https://akshartechnologies.com/wp-content/uploads/revslider/slider_3/banner-december-4-2.jpg)] flex-grow">
          <div className="h-16 flex items-center px-[7vw] md:px-30 flex justify-between bg-black">
            <div>
              <h1 className="text-3xl font-bold">
                <a href="/home">AMRENDRA</a>
              </h1>
            </div>
            <div className="flex gap-8">
              <Link to={"/home"} className="px-4" >
                HOME
              </Link>
              <Link to={"/about"} className="px-4">
                ABOUT
              </Link>
              <Link to={"/contact"} className="px-4">
                CONTACT
              </Link>
            </div>
            <button className=" md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <span className="text-3xl">&#9776;</span>
            </button>
          </div>

          <div
            className={`${
              isOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row bg-[rgba(0,0,0,0.8)] bg-blur-lg md:bg-white/0 md:text-white text-white justify-center md:justify-between px-[10vw] py-[3vh]`}
          >
            <div className="hidden md:flex font-mono text-2xl">LOGO</div>
            <ul className="md:flex font-mono text-2xl list-none gap-12">
              <li className="py-2 md:py-0">
                <Link to={"/home"}>HOME</Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to={"/projects"}>PROJECTS</Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to={"/used-tech"}>TECHNOLOGY</Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to={"/hire"}>HIRE</Link>
              </li>
              <li className="py-2 md:py-0">
                <Link to={"/contact"}>CONTACT</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
