import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import Loader from "../../components/UI/loader/Loader";
import CommentService from "../../API/CommentService";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isPostLoading] = useFetching(async () => {
        const response = await PostService.getPostById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading] = useFetching(async () => {
        const response = await CommentService.getComments(params.id)
        setComments(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div style={{marginLeft: "5%"}}>
            <h1>Post Page</h1>
            {isPostLoading
                ? <Loader/>
                : <div>{post.id} {post.title} {post.content}</div>
            }
            <h1>Comments</h1>
            {isCommentsLoading
                ? <Loader/>
                : <div>
                    {
                        comments.map(com =>
                            <div key={com.id} style={{marginTop: 15}}>
                                <li>{com.content}</li>
                            </div>
                        )

                    }
                </div>
            }
        </div>
    );
};

export default PostIdPage;