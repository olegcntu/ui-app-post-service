import React, {useEffect, useState} from "react";
import {usePosts} from "../../hooks/usePosts";
import {getPageCount, getPagesArray} from "../../utils/pages";
import {useFetching} from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import MyButton from "../../components/UI/button/MyButton";
import MyModal from "../../components/UI/./my_modal/MyModal";
import PostForm from "../../components/PostForm";
import PostFilter from "../../components/PostFilter";
import PostList from "../../components/PostList";
import Pagination from "../../components/UI/pagination/Pagination";
import Loader from "../../components/UI/loader/Loader";
import cl from "./css/Posts.module.css"

function Posts(name, value) {
    const [posts, setPosts] = useState([])

    const [filter, setFiler] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);
    let pagesArray = getPagesArray(totalPages)

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAllPosts(limit, page)
        setPosts(response.data.posts)
        const totalCount = response.data.size
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])


    const createPost = (newPost) => {
        PostService.postNewPost(newPost.title, newPost.content)
            .then(() => setPosts([...posts, newPost]))
            .then(setModal(false))

    }
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }


    return (
        <div className="App">
            <section className={cl.about}>
                <div className={cl.about_inner}>
                    <div className={cl.about_title}>
                        To create
                    </div>
                    <div className={cl.about_text}>
                        to create an article, you need to click the "Create" button,
                        specify its title and the body of the article itself,
                        after which the article will appear on the site
                    </div>
                    <a className={cl.about_btn + " " + cl.default_btn}
                       onClick={() => setModal(true)}>
                        Create
                    </a>
                </div>
            </section>
            <div>
                <MyModal visible={modal} setVisible={setModal}>
                    <PostForm create={createPost}/>
                </MyModal>

                <hr style={{margin: '15px 0'}}/>
                <PostFilter filter={filter} setFilter={setFiler}/>
                {postError &&
                    <h1>Error ${postError.message()}</h1>
                }
                {isPostLoading
                    ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
                    : <PostList remove={removePost} posts={sortedAndSearchedPost} title={"title"}/>
                }
                <Pagination
                    page={page}
                    changePage={changePage}
                    totalPage={totalPages}/>
            </div>
        </div>
    );
}

export default Posts;
