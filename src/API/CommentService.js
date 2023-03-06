import axios from "axios";

export default class CommentService {
    static async getComments(id) {
        try {
            const response = await axios.get('http://localhost:8082/api/comment?id= ' + id)
            return response
        } catch (e) {
            console.log(e)
        }

    }
}