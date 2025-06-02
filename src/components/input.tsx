interface InputProps {
  name: string;
  placeholder: string;
  required?: boolean;
  textarea?: boolean;
  type?: "text" | "email";
  validation?: {
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    whitespace?: boolean;
    specialCharacters?: string;
  };
}

export default function Input({
  name,
  placeholder,
  required = true,
  textarea,
  type = "text",
}: InputProps) {
  return (
    <>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          className="rounded bg-[#222] p-2 w-full min-h-30 resize-none"
          required={required}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          className="rounded bg-[#222] p-2 w-full"
          required={required}
        />
      )}
    </>
  );
}
