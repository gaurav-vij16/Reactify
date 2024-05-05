import { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/Usegif";

export default function Tag() {
    const [tag, setTag] = useState('');
    const { loading, gif, fetchdata } = useGif();

    const changeHandler = (event) => {
        setTag(event.target.value);
    };

    const generateGif = () => {
        fetchdata(tag); // Pass tag to fetchdata function
    };

    return (
        <div className="w-1/2 mb-6 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-6 mt-[15px] mx-auto">
            <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>

            { loading ? (<Spinner/>) : (<img src={gif} alt="random gif"/>)  }

            <input
                className="w-10/12 text-lg py-2 rounded-lg uppercase font-bold text-center"
                value={tag}
                onChange={changeHandler}
            />

            <button
                className="w-10/12 text-lg bg-pink-200 py-2 rounded-lg mb-6"
                onClick={generateGif} 
            >
                Generate
            </button>
        </div>
    );
}
