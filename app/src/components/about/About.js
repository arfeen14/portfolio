import React from 'react'
import foto from "../Images/fotoarfeen2.jpg"
import "./About.css"

function About() {
    return (
        <section id="aboutMe">
            <div className="aboutPage">
                <div></div>
                <div className="fotodiv">
                    <img className="foto" class="img-fluid rounded float-start" src={foto} alt="arfeenFoto" />
                </div>
                <div className="aboutText">
                    Hello my name is Arfeen Siddique, im a 4 year Software Engineer student at the Hoge School van Amsterdam
                    Currently I'm looking for a future in the Cloud bussines.
                </div>

            </div>
        </section>
    )
}

export default About
