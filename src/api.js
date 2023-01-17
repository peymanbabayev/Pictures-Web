import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ZrthVR5q83Xb4fjvIYCABQWgaI2iPTHzsMn3vTo08GQ'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;