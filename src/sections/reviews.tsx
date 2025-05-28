import { useState } from "react";
import Dot from "../components/dot";
import Section from "../components/Section";
import Title from "../components/title";
import { clientReviewsList } from "../data";
import { FaRegSadTear } from "react-icons/fa";

export default function Reviews() {
  const [page, setPage] = useState(1);
  const reviewsPerPage = 5;
  const totalPages = Math.ceil(clientReviewsList.length / reviewsPerPage);

  function handleLoadMore() {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  }

  return (
    <Section id="reviews">
      <Title title_1="What they say" title_2="Client Reviews" />
      <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-md:grid-cols-1">
        {clientReviewsList.slice(0, reviewsPerPage * page).map((review) => (
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
      {clientReviewsList.length > 0 ? (
        totalPages != page && (
          <button
            onClick={handleLoadMore}
            className="bg-[var(--primary)] rounded p-3 w-full mt-4"
          >
            Load More
          </button>
        )
      ) : (
        <div className="flex items-center justify-center text-[#333] border p-5 rounded-lg">
          <div className="flex flex-col items-center gap-2">
            <FaRegSadTear className="text-6xl" />
            <p>Nothing to show</p>
          </div>
        </div>
      )}
    </Section>
  );
}
