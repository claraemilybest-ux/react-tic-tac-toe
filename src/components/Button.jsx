import { useState } from "react";
export default function Button({onClick, children}){
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
        console.log("Button Clicked", count)
        
    }
    console.log('rendered');
    return (
        <button 
            className="bg-blue-500"
            onClick={handleClick}
        >{children} {count}</button>
    )
}