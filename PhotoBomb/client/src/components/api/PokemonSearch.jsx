//I'll probably use this to search photos.

import React, { useState } from "react";

function PokemonSearch() {
    const [searchTerm, setSearchTerm] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const officialArtwork = "official-artwork";
    console.log("img", imageUrl)
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Send a request to the PokeAPI to get the data for the desired Pokemon
        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
        );
        const data = await response.json();

        // Extract the image URL from the data and set it as the image URL state
        const image = data.sprites.other.dream_world.front_default;
        console.log("image", data.sprites.other.dream_world.front_default)
        setImageUrl(image);
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className="flex items-center m-4"
                style={{ width: "500px" }}
            >
                <label htmlFor="simple-search" className="sr-only">
                    Search
                </label>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        id="simple-search"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search Pokemon by name"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
            <div className="m-2 border rounded-m h-96 w-96 border-black p-2">
                <b>Image of Pokemon will be displayed here:</b><hr/>
                <div className="">{imageUrl && <img src={imageUrl} alt={searchTerm} />}</div>
            </div>
        </div>
    );
}

export default PokemonSearch;
