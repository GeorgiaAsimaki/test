import axios from 'axios';
const api = axios.create({
    baseURL: 'http://localhost:3020/post/'
});

const post = {
    postTitle : async(titlee) => {
      
        const response = await api.post(
            'checktitle',titlee, 
            {headers: {"Content-Type": "text/plain"}}
            )
        return response.data;
    },
}

const APIService = {
    post,
}
export default APIService;