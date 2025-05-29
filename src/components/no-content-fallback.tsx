import { FaRegSadTear } from "react-icons/fa";

export default function NoContentFallback({
  fallback = "Nothing to show",
}: {
  fallback?: string;
}) {
  return (
    <div className="flex items-center justify-center text-[#333] border p-5 rounded-lg w-full h-full">
      <div className="flex flex-col items-center gap-2">
        <FaRegSadTear className="text-6xl" />
        <p>{fallback}</p>
      </div>
    </div>
  );
}
