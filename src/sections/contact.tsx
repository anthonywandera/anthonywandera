import Section from "../components/Section";

export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <Section id="contact">
      <h2 className="font-bold mb-2">Contact</h2>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Subject"
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-300 rounded p-2 w-full"
            required
          />
        </div>

        <div>
          <textarea
            id="message"
            placeholder="Message"
            name="message"
            className="resize-none w-full min-h-20 border border-gray-300 rounded p-2"
            required
          />
        </div>
        <button className="bg-gray-200 py-1.5 px-8 rounded font-semibold w-fit">
          Submit
        </button>
      </form>
    </Section>
  );
}
