import axios from 'axios';


const KEY = 'AIzaSyAdxxRI7nXm0KHJLhAyzr6Hhckh-8IX8c8';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3'});