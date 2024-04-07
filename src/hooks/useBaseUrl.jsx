import axios from "axios";

const axiosBaseUrl = axios.create({
    baseURL: 'https://medlife-backen.vercel.app'
})

const useAxiosBaseUrl = () => {
    return axiosBaseUrl;
};

export default useAxiosBaseUrl;