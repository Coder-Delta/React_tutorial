import React, {useState,useEffect} from "react";
import "./style.css";
//jho khuj bhi use se start ho raha hai who hook hai hook basically prasent state ko change karta hai
//each component has differant state
const Counter: React.FC = () => {
    const [Counter, setConter]= useState<number>(0)

    useEffect(() => {
      console.log("Counter mounted")

      return function (){
        console.log("Counter unmounted")
      }
    }, [])

    //Empty array mean whole components

    useEffect(() => {
      console.log("Counter mounted updated!")
    }, [Counter])

    function countIncrementer (){
        setConter(Counter+1)
    }

    function countDecrementer (){
        if(Counter === 0) return;
        setConter(Counter-1)
    }
    //full function will be render when click btn
  return (
    <div className="Counter-Container">
      <h1>{Counter}</h1>
      <button onClick = {countIncrementer}style={{backgroundColor: "lightgreen"}}>Incriment</button>
      <button onClick={countDecrementer} style={{backgroundColor: "tomato"}}>Decrement</button>
    </div>
  );
};

export default Counter;
