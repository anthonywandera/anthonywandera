const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-16 py-2 fixed top-0 w-full b-[var(--theme-color-background)] z-10">
      <span className="text-4xl font-bold">AW.</span>
      <nav className="flex gap-6">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
