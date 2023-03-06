import React from "react";
import './index.css'

const BoxCounter = () => {
    return (
        <div className="box-counter">
            <div className="box-counter-mov">
                <div className="box-title">Movimentos feitos</div>
                <div className="box-count">150</div>
            </div>
            <div className="box-counter-min">
                <div className="box-title">Movimentos minímos</div>
                <div className="box-count">150</div>
            </div>
        </div>
    )
}

export default BoxCounter;