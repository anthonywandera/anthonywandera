import Input from "../components/input";
import Section from "../components/Section";
import Title from "../components/title";
import SubmitFormButton from "../components/submit-form-button";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import { validate } from "../util/validate";

emailjs.init("fwLvGyFnBCjhDoPmO");

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // check for any invalid inputs
  const subjectValidation = { minLength: 5, whitespace: true };
  const emailValidation = { email: true };
  const messageValidation = { minLength: 25, maxLength: 400, whitespace: true };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = Object.fromEntries(formData);

    for (const [key, value] of Object.entries(data)) {
      // check subject
      if (key === "subject") {
        const val = validate(value as string, subjectValidation);

        if (!val.valid) return;
      }

      // check message
      if (key === "message") {
        const val = validate(value as string, messageValidation);

        if (!val.valid) return;
      }

      // check email
      if (key === "email") {
        const val = validate(value as string, emailValidation);

        if (!val.valid) return;
      }
    }

    data.date = new Date().toISOString();

    // start the submission
    setIsSubmitting(true);
    try {
      await emailjs.send("service_81bc80k", "template_kuiwc6u", data);

      // complete submission
      setIsSubmitting(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Section
      id="contact"
      className="bg-[var(--primary)] mx-2 px-12 py-4 rounded-xl max-sm:px-6"
      center={false}
    >
      <Title title_1="Let's talk" title_2="Contact Me" />
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <Input
          name="subject"
          placeholder="Subject"
          validation={subjectValidation}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          validation={emailValidation}
        />
        <Input
          name="message"
          placeholder="Message"
          validation={messageValidation}
          textarea
        />

        <SubmitFormButton isSubmitting={isSubmitting} />
      </form>
    </Section>
  );
}
