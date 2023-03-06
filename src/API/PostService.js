import axios from "axios";

export default class PostService {
    static async getAllPosts(limit = 10, page = 1) {
        try {
            const response = await axios.get('http://localhost:8082/api/post', {
                params: {
                    limit: limit,
                    page: page
                }
            })
            return response
        } catch (e) {
            console.log(e)
        }

    }

    static async postNewPost(title, content) {
        try {
            const response = await axios.post('http://localhost:8082/api/post', {
                params: {
                    title: title,
                    content: content
                }
            })
            return response
        } catch (e) {
            console.log(e)
        }

    }

    static async getPostById(id) {
        try {
            const response = await axios.get('http://localhost:8082/api/post/' + id)
            return response
        } catch (e) {
            console.log(e)
        }

    }

    static async deletePostById(id) {
        try {
            const response = await axios.delete('http://localhost:8082/api/post/?id=' + id)
            return response
        } catch (e) {
            console.log(e)
        }

    }
}