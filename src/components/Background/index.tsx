import React from "react";
import img1 from '../../assets/hanoi.jpg'
import Suport from "../Suport";

const Background = () => {
  return (
    <div className="box tamanho10">
      <Suport />
      <div className="tamanho7">
        <img src={img1} alt="" />
      </div>
    </div>

  )
}

export default Background;