// Random.js
import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/Usegif";

const Random = () => {
    const { loading, gif, fetchdata } = useGif();

    return (
        <div className="w-1/2 mb-6 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-6 mt-[15px] mx-auto">
            <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>

            {loading ? <Spinner /> : <img src={gif} alt="Random Gif" />}

            <button
                className="w-10/12 text-lg bg-pink-200 py-2 rounded-lg mb-6"
                onClick={fetchdata}
            >
                Generate
            </button>
        </div>
    );
};

export default Random;
