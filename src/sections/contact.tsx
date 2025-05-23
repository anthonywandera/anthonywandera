import Input from "../components/input";
import Section from "../components/Section";
import Title from "../components/title";
import SubmitFormButton from "../components/submit-form-button";

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const data = Object.fromEntries(formData);
  data.date = new Date().toISOString();

  const response = await fetch(
    "https://anthonywandera-26338-default-rtdb.firebaseio.com/messages.json",
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );

  console.log(response);
}

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-[var(--primary)] mx-2 px-12 py-4 rounded-xl max-sm:px-6"
      center={false}
    >
      <Title title_1="Let's talk" title_2="Contact Me" />
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Input name="subject" placeholder="Subject" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="message" placeholder="Message" textarea />

        <SubmitFormButton />
      </form>
    </Section>
  );
}
