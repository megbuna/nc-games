import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getReviews } from "../api";
import { ReviewCard } from "./ReviewCard";

export const ReviewList = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryQuery = searchParams.get('category');
    const [listOfReviews, setListOfReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviews) => {
        setListOfReviews(reviews);
        setIsLoading(false);
    });
}, []);

return isLoading ? (
    <p> Loading... </p>
) :
(<section>
    <h2> Reviews </h2>
    {
        listOfReviews.map(({review_id, title, designer, owner, review_img_url, category, created_at, votes}) => {
            return (
                    <ReviewCard key={review_id} review_id={review_id} title={title} designer={designer} owner={owner} img_url={review_img_url} genre={category} created_at={created_at} votes={votes}/>
            )
        })
    }
</section>
);
};