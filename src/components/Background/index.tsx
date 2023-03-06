import React from "react";
import img1 from '../../assets/hanoi.jpg'
import img2 from '../../assets/suport.png'
import BoxCounter from "../Counter";
import Suport from "../Suport";
import './index.css'

const Background = () => {
  return (
    <>
      <div className="box tamanho6">
        <BoxCounter/>
        <Suport />
        <div className="suporte tamanho9">
          <img src={img2} alt="" />
        </div>
        <div className="tamanho10">
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  )
}

export default Background;