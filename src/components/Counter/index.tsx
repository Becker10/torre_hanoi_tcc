import React from "react";
import './index.css'


const BoxCounter = () => {
    return (
        <div className="box-counter">
            <div className="box-counter-mov">
                <div className="box-title">Movements Made</div>
                <div className="box-count">

                </div>
            </div>
            <div className="box-counter-min">
                <div className="box-count min">150</div>
                <div className="box-title">Minimum Movements</div>
            </div>
        </div>
    )
}

export default BoxCounter;