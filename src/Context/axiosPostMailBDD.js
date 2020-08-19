import axios from 'axios';

export default axios.create(
    {
        baseURL:'https://bdd-recruitement-website.firebaseio.com/'
    }
)

