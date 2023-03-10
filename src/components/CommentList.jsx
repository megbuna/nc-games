import { useEffect, useState } from "react";
import { getComments } from "../api";
import { CommentCard } from "./CommentCard";
import { PostComment } from "./PostComment"

export const CommentList = ({review_id}) => {

    const [listOfComments, setListOfComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true)
        getComments(review_id).then((comments) => {
            setListOfComments(comments)
            setIsLoading(false)
        });
    }, [review_id]);

    return isLoading ? (
        <p> Loading comments... </p>
    ) :
    listOfComments.length === 0 ?  (<div><p> No comments yet </p><PostComment setListOfComments={setListOfComments}/></div>)
    :
    (
    <section>
        <div className="commentList">
        <h3> Comments: </h3>
        {
            listOfComments.map(({body, votes, author, created_at, comment_id, review_id}) => {
                return (
                        <CommentCard key={comment_id} body={body} author={author} created_at={created_at} review_id={review_id} votes={votes} />
                )
            })
        }
        </div>
        <PostComment setListOfComments={setListOfComments}/>
    </section>
    );
};