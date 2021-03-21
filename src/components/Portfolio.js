import React from 'react';
import netflix from '../logo/wall-and-laptop-background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import {PopupboxManager, PopupContainer} from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Portfolio = () => {

    //netflix
    const openPopupNetflix = () =>{
        const content = (

      
        <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptas aspernatur ratione officia distinctio voluptate omnis, odit amet, iure ullam quod harum autem expedita soluta fugit, qui accusamus eveniet cum in aliquam itaque repudiandae! Suscipit in praesentium natus asperiores dignissimos?</p>
        <b>GitHub: </b> <a className="hyper-link" onClick={() =>window.open("")}>enlace de github</a><br />
        <b>Demo: </b> <a className="hyper-link" onClick={() =>window.open("","_blank")}>enlace de demo</a>
        </>
          )
          PopupboxManager.open({content})
    }

    const popupboxConfigNetflix ={
        titleBar:{
            enable: true,
            text:"Netflix clone"
        },
        fadeIn: true,
        fadeInSpeed: 500

    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portafolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupNetflix}>
                      <img className="portfolio image" src={netflix} alt="Netflix..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
              
                    {/* -- */}
               
                    <div className="portfolio-image-box">
                         <img className="portfolio image" src={netflix} alt="Netflix..."/>
                         <div className="overflow"></div>
                         <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
            
                 {/* -- */}
          
                    <div className="portfolio-image-box">
                        <img className="portfolio image" src={netflix} alt="Netflix..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>        
               
                 {/* -- */}
               
                    <div className="portfolio-image-box">
                        <img className="portfolio image" src={netflix} alt="Netflix..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>     
                </div>
            </div>
            <PopupContainer {...popupboxConfigNetflix} />
        </div>
    )
}

export default Portfolio
