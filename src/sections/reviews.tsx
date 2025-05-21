import Section from "../components/Section";
import { clientReviewsList } from "../data/client-reviews";

export default function Reviews() {
  return (
    <Section id="reviews">
      <h2 className="font-bold mb-4">Reviews</h2>
      <div className="grid grid-cols-3 gap-4">
        {clientReviewsList.map((review) => (
          <div key={review.id} className="bg-gray-200 p-2 rounded">
            <p className="text-xs mb-2">{review.name}</p>
            <p>{review.message}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
