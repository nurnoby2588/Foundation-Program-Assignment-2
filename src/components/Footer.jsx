const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 py-6 sm:flex-row sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-white">Movie Explorer</h2>
        <p className="text-sm">© 2026 MovieExplorer.All right reserved</p>
        <a
          href="https://github.com/nurnoby2588"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm transition hover:text-white"
        >
          Github
        </a>
      </div>
    </footer>
  );
};

export default Footer;
