import { FaRegSadTear } from "react-icons/fa";

export default function NoContentFallback() {
  return (
    <div className="flex items-center justify-center text-[#333] border p-5 rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <FaRegSadTear className="text-6xl" />
        <p>Nothing to show</p>
      </div>
    </div>
  );
}
