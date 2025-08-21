export default function Nav() {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white md:bg-white/0 md:text-white text-black justify-center md:justify-between px-[10vw] py-[3vh]">
        <div className="hidden md:block text-xl">LOGO</div>
        <ul className="md:flex text-xl list-none gap-12">
          <li className="py-2 md:py-0">
            <a href="">HOME</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="">PROJECTS</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="">TECHNOLOGY</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="">HIRE</a>
          </li>
          <li className="py-2 md:py-0">
            <a href="">CONTACT</a>
          </li>
        </ul>
      </div>
    </>
  );
}
