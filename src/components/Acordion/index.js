import { useState } from "react"

function Acordion(props) {

    const [bagText, setBagText] = useState(false)

    return (
        <div>
            <div className="relative bg-white max-w-7xl rounded-lg mx-auto p-6 mt-8">
                <h1 className="font-extrabold text-3xl md:text-3xl mb-8" onClick={() => setBagText(!bagText)}>
                    {props.title}
                </h1>

                {
                    bagText ?
                        <p className="text-1xl">
                            {props.text}
                        </p>
                        : null
                }
            </div>
        </div >
    )
}

export default Acordion;