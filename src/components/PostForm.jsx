import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', content: ''})
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost)
        setPost({title: '', content: ''})
    }
    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="title"/>
            <MyInput
                value={post.content}
                onChange={e => setPost({...post, content: e.target.value})}
                type="text"
                placeholder="content"/>
            <MyButton onClick={addNewPost}>Create</MyButton>
        </form>
    );
};

export default PostForm;