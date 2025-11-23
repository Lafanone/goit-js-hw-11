import axios from 'axios'

export function getImagesByQuery(query) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '53374557-3f57f89b9c540f2869ff2907f'
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    }
    return axios.get(BASE_URL, {params}).then(response => response.data)
}