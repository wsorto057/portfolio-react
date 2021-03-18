import React from 'react';
import foto_author from '../logo/foto_color william sorto.JPG';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                         <img className="profile-img" src={foto_author} alt="Author..."/>
                    </div>
                   
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className ="about-heading">About Me</h1>
                    <p>
                        programador
                        desarrollador 
                        Full Stack
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
