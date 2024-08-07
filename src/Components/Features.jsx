import React from "react";

function Features(){
return(
    <div className="w-full h-72 flex flex-col items-center bg-gray-500 text-yellow-500 text-stroke-3 font-bold shadow-lg bg-opacity-45 ">

    <h1 className="text-3xl mt-3 stroke-black">What does Dev Adventures Offer?</h1>
    <div className="flex flex-row justify-around w-full mt-auto mb-auto">


    <div className="flex flex-col items-center">
    <img src="https://cdn-icons-png.flaticon.com/512/2980/2980218.png" className="w-24 h-24"></img>
    <h1 className="text-xl">a cost efficient way to learn!</h1>
    </div>
    

    <div className="flex flex-col items-center">
    <img src="https://cdn-icons-png.flaticon.com/512/5344/5344646.png" className="w-24 h-24"></img>
    <h1 className="text-xl">a job oppurtunity for those</h1>
    <h1 className="text-xl">with the skills needed!</h1>
    </div>


    
    <div className="flex flex-col items-center">
    <img src="https://cdn-icons-png.flaticon.com/512/5088/5088218.png" className="w-24 h-24"></img>
    <h1 className="text-xl">a clear path for learning</h1>
    <h1 className="text-xl">from beginning to end</h1>
    </div>

    </div>
    </div>
)
}

export default Features