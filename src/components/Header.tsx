const Header: React.FC = () => {
  return (
    <header className="flex justify-end z-40 items-center px-16 py-2 fixed top-0 w-full b-[var(--theme-color-background)] bg-[#0002] backdrop-blur-2xl">
      <nav className="flex gap-6 z-50">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
