export default function Footer() {
  return (
    <footer>
      <p className="text-xs flex justify-center gap-2 items-center">
        <span>{new Date().getFullYear()}</span>
        <span>&copy;</span>
        <span>Copyright</span>
      </p>
    </footer>
  );
}
