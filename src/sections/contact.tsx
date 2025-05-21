import Section from "../components/Section";

export default function Contact() {
  return (
    <Section id="contact">
      <h2 className="font-bold mb-2">Contact</h2>
      <form className="flex flex-col gap-5">
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            name="subject"
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            className="border border-gray-300 rounded p-2 w-full"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="resize-none w-full min-h-20 border border-gray-300 rounded p-2"
          />
        </div>
        <button type="button">Submit</button>
      </form>
    </Section>
  );
}
