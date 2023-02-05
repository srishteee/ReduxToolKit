import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCount } from "../countSlice";
const Header = () => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const  handleCount = () => {
      dispatch(addCount(count+1));
    };
//    const [count, setCount] = useState(0);
    // const handleCount = () => {
    //     //setCount(count+1);
    //     console.log("click on handle counte")
       
    // }
    return (
        <>
        <Link to={"count"}>
        <p className="text-3xl">
        count </p>
        <div class="border-b-4 border-indigo-500 ..."></div>
        </Link>
        <button onClick={() => handleCount()} class="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
 addItems 
</button></>
   )

}
export default Header;