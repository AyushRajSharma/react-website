import React, {Component} from 'react';
import Header from '../common/header';
import image from '../assets/img/map-image.png'
import Timeline from '../common/Timeline';
import Team from '../common/team';
import Footer from '../common/footer';

class About extends Component{

    render(){
        return(
            <div>
                
                 <Header
                 title="About Us"
                 subtitle="It's Really a great story"
        
                 image= {image}
                 showButton={false}
                 />
            
                  <Timeline/>
                  <Team/>
                  <Footer/>
            </div>
        );
    }
}

export default About;