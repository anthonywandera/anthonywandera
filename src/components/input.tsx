import { useState } from "react";
import { Validation } from "../types";
import { validate } from "../util/validate";

interface InputProps {
  name: string;
  placeholder: string;
  required?: boolean;
  textarea?: boolean;
  type?: "text" | "email";
  validation?: Validation;
}

export default function Input({
  name,
  placeholder,
  validation,
  textarea,
  required = true,
  type = "text",
}: InputProps) {
  const [inputState, setInputState] = useState<{
    valid: boolean;
    value: string;
    error: string;
  }>({ valid: true, value: "", error: "" });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const inputEl = e.target;
    const val = inputEl.value;

    if (validation) {
      setInputState(validate(val, validation));
    }
  }

  return (
    <>
      <div>
        {textarea ? (
          <textarea
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            className="rounded bg-[#222] p-2 w-full min-h-30 resize-none"
            required={required}
          />
        ) : (
          <input
            id={name}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            className="rounded bg-[#222] p-2 w-full"
            required={required}
          />
        )}
        {!inputState.valid && (
          <p className="text-xs text-red-400">{inputState.error}</p>
        )}
      </div>
    </>
  );
}
