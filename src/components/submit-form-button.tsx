import { IoMdSend } from "react-icons/io";
import Spinner from "./spinner";

export default function SubmitFormButton({
  isSubmitting,
}: {
  isSubmitting?: boolean;
}) {
  return (
    <button
      disabled={isSubmitting}
      className="py-1.5 bg-[#222] hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)] transition-colors px-8 rounded font-semibold w-fit disabled:cursor-not-allowed"
    >
      {!isSubmitting ? <IoMdSend /> : <Spinner />}
    </button>
  );
}
