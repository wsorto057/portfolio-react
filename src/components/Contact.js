import React ,{useState} from 'react';
import emailjs from 'emailjs-com';
import {useForm} from 'react-hook-form';

const Contact = () => {

    const [successMessage, setSuccessMessage] =useState("");
    const {register, handleSubmit, errors} = useForm();


    const serviceID='service_portfolio';
    const templateID='template_portfolio';
    const userID ='user_YTzktoqvkoELqcn9hKMZo';

    const onSubmit=(data, reset) =>{
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone:data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        reset.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
       // e.preventDefault();
    
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
            setSuccessMessage("form send it successfully");
          }).catch(err => console.log(`Error: ${err}`));
      }




    return (
        <div className="contact">
            <div className="text-center">
                <h1>Contact me</h1>
                <p>Please fill out the form and descrie your project</p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit= {handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* name input */}
                        <div className="text-center">
                            <input type="text" className="form-control" placeholder="Name" name="name" 
                            ref={
                                register({
                                    required: "please enter your name",
                                    maxLength: {
                                        value:20, 
                                        message: "Please enter a name width fewer than 20 characters"

                                    }
                                })

                            }
                                />
                            <div className="line"></div>
                        </div>
                            <span className="error-message">{errors.name && errors.name.message} </span>
                         {/* phone input */}
                        <div className="text-center">
                            <input type="text" className="form-control" placeholder="Phone" name="phone" 
                            ref={
                                register({
                                    required: "please enter a phone number"
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">{errors.phone && errors.phone.message} </span>
                          {/* email input */}
                       <div className="text-center">
                        <input type="email" className="form-control" placeholder="Email" name="email" 
                         ref={
                            register({
                                required: "please enter an email"
                            })
                        }
                        />
                            <div className="line"></div>
                       </div>
                       <span className="error-message">{errors.email && errors.email.message} </span>
                         {/* subject input */}
                        <div className="text-center">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" 
                               ref={
                                register({
                                    required: "please enter the subject"
                                })
                            }
                            />
                            <div className="line"></div>
                        </div>
                        <span className="error-message">{errors.subject && errors.subject.message} </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                         {/* description input */}
                         <div className="text-center">
                            <textarea type="text" className="form-control" placeholder="Description" name="description" 
                                ref={
                                    register({
                                        required: "please enter a description"
                                    })
                                }
                            ></textarea>
                            <div className="line"></div>
                         </div>
                         <span className="error-message">{errors.description && errors.description.message} </span>
                         <button className="btn-main-offer contact-btn">Contact me</button>


                    </div>


                </div>
                </form>

            </div>
        </div>
    )
}

export default Contact
