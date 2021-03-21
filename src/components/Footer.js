import React from 'react';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon} from 'react-share';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>San Salvador</p>
                        </div>
                        <div className="d-flex">
                            <p><a href=" 555-555-555"></a></p>
                        </div>
                        <div className="d-flex">
                            <p>william.sorto.alv@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav" > home</a>
                                <a className="footer-nav" > about me</a>
                                <a className="footer-nav" > services</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav" > experience</a>
                                <a className="footer-nav" > portfolio</a>
                                <a className="footer-nav" > contact</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col sm 6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton quote="Fullstack" hashtag="#javascript">
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton quote="Fullstack" hashtag="#javascript">
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                        </div>
                       <p className="pt-3 text-center">Copyright</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
