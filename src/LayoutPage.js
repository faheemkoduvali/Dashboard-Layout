import React from 'react'

function LayoutPage() {
    return (
        <div>
            <div className="top"></div>
            <div className="center">
                <div className="center-left"></div>
                <div className="center-right"></div>
            </div>
            <div className="bottom">
                <button className="bottom-Button btn1" ></button>
                <button className="bottom-Button btn2" ></button>
                <button className="bottom-Button btn3" ></button>
            </div>
        </div>
    )
}

export default LayoutPage
