import React from 'react';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">Services </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                               <div className="circle">
                                     <FontAwesomeIcon className ="icon" icon={faDesktop} size="2x" />
                               </div>
                                <h3>frontend</h3>
                                <p>i approach each project individualy and always focus on the result</p>
                            </div>
                        </div>
                        {/* - */}

                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                     <FontAwesomeIcon className ="icon" icon={faFacebookF} size="2x" />
                               </div>
                                <h3>backend</h3>
                                <p>i approach each project individualy and always focus on the result</p>
                            </div>
                        </div>
                          {/* - */}
                          <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                     <FontAwesomeIcon className ="icon" icon={faGoogle} size="2x" />
                               </div>
                                <h3>data analisys</h3>
                                <p>i approach each project individualy and always focus on the result</p>
                            </div>
                        </div>

                    </div>
                </div>
            


        </div>
    )
}

export default Services
