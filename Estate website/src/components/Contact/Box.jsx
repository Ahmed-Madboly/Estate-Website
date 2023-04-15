import React from 'react'

function Box({icon,title,num,btn}) {
    return (
        <div className="box">
            <div className="top">
                <div className="icon">
                    {icon}
                </div>
                <div className="details">
                    <div className="title">
                        {title}
                    </div>
                    <span className='numbre'>
                        {num}
                    </span>
                </div>
            </div>
            <div className="bottom">
                <button className="c-button">
                    {btn}
                </button>
            </div>
        </div>
    )
}

export default Box