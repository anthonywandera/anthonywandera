export default function NavigationButton({
  children,
  to,
}: {
  children: string;
  to: string;
}) {
  function handleClick() {
    const destination = document.querySelector(`#${to}`);

    destination?.scrollIntoView({ behavior: "smooth" });
  }

  return <button onClick={handleClick}>{children}</button>;
}
