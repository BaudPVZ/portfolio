import Examples from "./Examples";
import Me from "./Me";
import { useState } from "react";
import "./style.css";

export default function app() {

  const [name, setName] = useState("имя");
  const [discription, setDiscription] = useState("что-то очень интересное");
  const [image, setImage] = useState("./assets./profile.png");


  

  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
      <Me 
      name={name}
      discription={discription}
      image={image}
      ></Me>
      <Examples></Examples>
    </div>
  )
}
