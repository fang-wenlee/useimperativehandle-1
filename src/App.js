import "./styles.css";
import {useState, useRef } from 'react';
//import CustomInput from '.CustomInput';

export default function App() {
    const [value, setValue ] = useState("red")
    const inputRef = useRef();
  return (
    <>
    <input
       ref ={inputRef}
       value = {value}
       onChange = {e => setValue(e.target.value)}
    />
    <br/>
       <button onClick={()=> inputRef.current.focus()}>
           Focus
        </button>
  
    </>
  );
}
