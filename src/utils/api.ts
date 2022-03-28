import axios, { AxiosRequestConfig, Method } from 'axios';
const apiUrl:string = "https://sugoku.herokuapp.com/"

const fetchAPI = (method: Method, url: string, body?: any) => {
    return new Promise ((resolve, reject) => {
        const config:AxiosRequestConfig = {
            url: apiUrl + url,
            method: method,
            data: body,
        }
        axios(config)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err))
    })
}

export { fetchAPI }