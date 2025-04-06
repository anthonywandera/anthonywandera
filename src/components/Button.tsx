const Button: React.FC<{ children: string }> = ({ children }) => {
  return (
    <button
      className={`flex justify-center font-bold items-center border-1 border-[var(--theme-color-accent)] p-2 rounded bg-[var(--theme-color-accent)] text-[var(--theme-color-background)]`}
    >
      {children}
    </button>
  );
};

export default Button;
