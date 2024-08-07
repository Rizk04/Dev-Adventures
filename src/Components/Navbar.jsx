import React from "react";
import "../index.css"
function Navbar(){
    return(     
        <div className="flex flex-row bg-gray-700 py-3 justify-start items-center mb-5 shadow-md">
            <h1 className="mx-4 text-yellow-500 text-2xl">Dev Adventures</h1>
            <div className="flex items-center bg-white rounded-full border border-gray-300 ">
                <input
                    placeholder="Search here"
                    className="w-72 md:w-96 bg-transparent px-6 py-2 rounded-full border-none focus:outline-none"
                />
            </div>

            <div className="flex ml-auto mx-3">
                <button className="ml-2 px-4 py-2 bg-yellow-500 text-white border border-yellow-500 rounded hover:bg-yellow-600 hover:border-yellow-600">Login</button>
                <button className="ml-2 mr-5 px-4 py-2 bg-yellow-500 text-white border border-yellow-500 rounded hover:bg-yellow-600 hover:border-yellow-600">Sign Up</button>
                <img class="w-10 h-10 rounded-full" src="./src/Untitled.jpg" alt="Rounded avatar"></img>
            </div>

        </div>
        
       
    )

}

export default Navbar;
