import React from 'react'
import "./cv.css"
import CVs from "../cv/CV.png"


function CV() {
    return (
        <section id="CV">
            <div className="parent">
                <div className="downloadCv">
                    <button>Download CV</button>
                </div>
                <div className="cvArfeenFoto">
                    <img src={CVs} class="img-fluid" alt="mijnCV" />
                </div>

            </div>
        </section >
    )
}

export default CV
