import Section from "../components/Section";
import Title from "../components/title";
import { clientReviewsList } from "../data";

export default function Reviews() {
  return (
    <Section id="reviews">
      <Title title_1="What they say" title_2="Client Reviews" />
      <div className="grid grid-cols-3 gap-4">
        {clientReviewsList.map((review) => (
          <div key={review.id} className="bg-[var(--primary)] p-2 rounded">
            <p className="text-xs mb-2">{review.name}</p>
            <p>{review.message}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
