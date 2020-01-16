import axios from 'axios';

export default axios.create({
    //needs to be updated every 8hrs if no account
    baseURL: 'http://e8c569fa.ngrok.io'
})