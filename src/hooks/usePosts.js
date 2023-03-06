import {useMemo} from "react";

export const useStoredPost = (posts, sort) => {
    const sortedPost = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts

    }, [sort, posts])
    return sortedPost
}

export const usePosts = (posts, sort, query) => {
    const sortedPost = useStoredPost(posts, sort)
    const sortedAndSearchedPost = useMemo(() => {
        return sortedPost.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPost])
    return sortedAndSearchedPost;
}