import React, {Component} from 'react';
import Field from '../common/field';
import Footer from '../common/footer';


const field={
    sections: [
        [
            {name: 'name', type: 'text', elementName: 'input', placeholder: 'Your Name *', val_message: 'Please enter your name.'},
            {name: 'email', type: 'email', elementName: 'input', placeholder: 'Your Email *', val_message: 'Please enter your email.'},
            {name: 'phone', type: 'tel', elementName: 'input', placeholder: 'Your Phone no *', val_message: 'Please enter your phone no.'},
        ],
        [
            {name: 'message', elementName: 'textarea', placeholder: 'Please Message Here *', val_message: 'Please enter your message.'},

        ]

    ]
}

class Contact extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '', 
            phone: '',
            message: ''
        }
    }
    render(){
        return(
            <div>
                      <section className="page-section" id="contact">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                </div>
                                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                                    <div className="row align-items-stretch mb-5">
                                        {field.sections.map((section, sectionIndex) => {
                                            return(
                                            console.log("rendering section", sectionIndex, "with", section), 
                                                <div className="col-md-6" key={sectionIndex}>
                                                    {section.map((field, i) => {
                                                        return <Field
                                                        {...field}
                                                        key={i} 
                                                        value ={this.state[field.name]}
                                                        onChange={e =>{this.setState({[field.name]: e.target.value})}}
                                                        />
                                                    })}

                                                </div>
                                            );
                                        })}                                  
                                        
                                    </div>
                                    <div className="text-center">
                                        <div id="success"></div>
                                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                        <Footer/>
            </div>
        );
    }
}
export default Contact;