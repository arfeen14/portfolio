import React from 'react'
import "./About.css"

// The image comes from an amazon S3 bucket, but i dont know if this is the best way to show it

function About() {
    return (
        <section id="aboutMe">
            <div className="aboutPage">
                <div></div>
                <div className="fotodiv">
                    <img className="foto" class="img-fluid rounded float-start" src='https://portfolioarfeen.s3.eu-west-1.amazonaws.com/fotoarfeen2.jpg' alt="arfeenFoto" />
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
