import React from 'react'

export default function Footer() {
    let style = {
        marginTop: "auto",
        position: "absolute",
        width: "100%"
    }
    return (
        <div className='bg-dark text-light my-3' style={style}>
            <p className="text-center">
                Come and join us
            </p>
            <marquee>I spend more than 3 weeks to done this project</marquee>
            <div className="bg-dark text-light" style={style}>
                
                <p className="text-center">
                    Copyright &copy; CodeWithReshab.com
                </p>
            </div>
        </div>
    )
}
