const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AMRENDRA KUMAR PORTFOLIO. All rights
          reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span> | </span>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <span> | </span>
          <a href="#" className="hover:underline">
            Contact{' '}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
