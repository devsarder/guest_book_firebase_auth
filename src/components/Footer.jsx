// Footer.js
export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4 w-full">
      <div className="text-center">
        <p className="text-sm">
          Guest Book &copy; {new Date().getFullYear()} | Crafted with ❤️ by
          Sarder Sujon
        </p>
      </div>
    </footer>
  );
};
export default Footer;
