import Connect from "../components/connect";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-1 items-center">
      <div className="p-1">
        <Connect />
      </div>
      <p className="text-xs flex justify-center gap-2 items-center">
        <span>{new Date().getFullYear()}</span>
        <span>&copy;</span>
        <span>Copyright</span>
      </p>
    </footer>
  );
}
