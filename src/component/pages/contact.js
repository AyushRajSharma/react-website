import React, {Component} from 'react';
import Field from '../common/field';
import Footer from '../common/footer';
import {withFormik} from 'formik';
import * as Yup from 'yup';


const field={
    sections: [
        [
            {name: 'name', type: "text", elementName: 'input', placeholder: 'Your Name *', val_message: 'Please enter your name.'},
            {name: 'email', type: "email", elementName: 'input', placeholder: 'Your Email *', val_message: 'Please enter your email.'},
            {name: 'phone', type: "tel", elementName: 'input', placeholder: 'Your Phone no *', val_message: 'Please enter your phone no.'},
        ],
        [
            {name: 'message', elementName: 'textarea', placeholder: 'Please Message Here *', val_message: 'Please enter your message.'},

        ]

    ]
}

class Contact extends Component{
    render(){
        return(
            <div>
                      <section className="page-section" id="contact">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                </div>
                                <form id="contactForm" name="sentMessage" novalidate="novalidate"  onSubmit ={this.props.handleSubmit}>
                                    <div className="row align-items-stretch mb-5">
                                        {field.sections.map((section, sectionIndex) => {
                                            return(
                                            console.log("rendering section", sectionIndex, "with", section), 
                                                <div className="col-md-6" key={sectionIndex}>
                                                    {section.map((field, i) => {
                                                        return <Field
                                                        {...field}
                                                        key={i} 
                                                        value ={this.props.values[field.name]}
                                                        name = {field.name}
                                                        onChange={this.props.handleChange}
                                                        onBlur ={this.props.onBlur}
                                                        touched = {this.props.touched[field.name]}
                                                        errors ={this.props.errors[field.name]}
                                                        />
                                                    })}

                                                </div>
                                            );
                                        })}                                  
                                        
                                    </div>
                                    <div className="text-center">
                                        <div id="success"></div>
                                        <button 
                                        className="btn btn-primary btn-xl text-uppercase" 
                                        id="sendMessageButton" 
                                        type="submit"
                                        
                                        >Send Message
                                         </button>
                                    </div>
                                </form>
                            </div>
                        </section>
                        <Footer/>
            </div>
        );
    }
}
export default withFormik({

    mapPropsToValues : ()=>({
        name :'',
        email : '',
        phone : '',
        message : ''
    }),
   validationSchema: Yup.object().shape({
        name: Yup.string()
        .min(3, "you provide name longer than that ")
        .max(12, 'you name is too longer kindly short it')
        .required('you should have to give your name'),

        email: Yup.string()
        .email('this is not a valid email')
        .required('please provide a your email address'),
        
        phone: Yup.string()
        .min(10, 'you need to provide 10 digit phone number')
        .max(10, 'you need to provide 10 digit phone number')
        .required('you have to give us you phone number'),
        
        message: Yup.string()
        .min(20, 'your message is too short')
        .max(700, "your message should not have more than 700 charecter")
        .required("provide message here")
   }),
   
    handleSubmit: (values, {setSubmitting}) =>{
        alert("you've submitted the form", JSON.stringify(values));
    } 


})(Contact);