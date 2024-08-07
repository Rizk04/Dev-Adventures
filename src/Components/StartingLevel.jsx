import React from "react";

function Level(props){
return (
    <div className=" text-yellow-500 mt-5 flex flex-col w-1/4 h-64 border border-yellow-500 rounded-lg overflow-hidden space-y-4 bg-gray-700 hover:bg-yellow-500 hover:text-gray-700" >
<h1 className="text-3xl text-center pt-3"> {props.title} </h1>
<div>
    <ul className="list-disc">
        <li className="text-xl m-6">{props.feature1}</li>
        <li className="text-xl m-6">{props.feature2}</li>
        <li className="text-xl m-6">{props.feature3}</li>
    </ul>
</div>
</div>


)
}
export default Level;