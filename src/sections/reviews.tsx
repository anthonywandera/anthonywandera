import Dot from "../components/dot";
import Section from "../components/Section";
import Title from "../components/title";
import { clientReviewsList } from "../data";

export default function Reviews() {
  return (
    <Section id="reviews">
      <Title title_1="What they say" title_2="Client Reviews" />
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-md:grid-cols-1">
        {clientReviewsList.map((review) => (
          <div key={review.id} className="bg-[var(--primary)] p-4 rounded">
            <h4 className="text-xs mb-2 flex items-center gap-2">
              <span>{review.name}</span>
              {/* {review.position && (
                <>
                  <Dot />
                  <span>{review.position}</span>
                </>
              )} */}
              {review.company && (
                <>
                  <Dot />
                  <span>{review.company}</span>
                </>
              )}
            </h4>
            <p>{review.message}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
