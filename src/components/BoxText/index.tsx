import React from "react";
import './index.css'

const BoxText = () => {
  return (
    <div className="box-text">
      <form action="" className="box-text-area">
        <textarea className="box-text-input" name="nome" id="name" placeholder="digite as instruções" />
      </form>
      <button className="box-text-btn" type="submit" value="enviar">SUBMIT</button>
    </div>
  )
}

export default BoxText;