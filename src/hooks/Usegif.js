
import { useState, useEffect } from "react";
import axios from "axios";


const API_KEY = 'kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = () => {
    const [loading, setLoading] = useState(false);
    const [gif, setGif] = useState('');

    const fetchdata = async (tag) => {
        setLoading(true);
        try {
            const apiUrl = tag ? `${url}&tag=${tag}` : url;
            const { data } = await axios.get(apiUrl);
            const gifUrl = data.data.images.downsized_large.url;
            console.log(gifUrl);
            setGif(gifUrl);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return { loading, gif, fetchdata };
};

export default useGif;
