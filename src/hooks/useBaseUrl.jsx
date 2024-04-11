import axios from "axios";

const axiosBaseUrl = axios.create({
    baseURL: 'https://api.medlifeeasy.com'
})

const useAxiosBaseUrl = () => {
    return axiosBaseUrl;
};

export default useAxiosBaseUrl;