import React from 'react';
import MultiplePizzas from './assets/multiplePizzas.jpeg';
import './styles/About.css';
import {motion} from 'framer-motion';

function About() {
  return (
    <motion.div 
    className="about"
    intial = {{width: 0}}
    animate = {{width: "100%"}}
    exit = {{x:window.innerWidth, transition: {duration: 0.3}}}
    >
        <div className="aboutTop" 
        style = {{ backgroundImage: `url(${MultiplePizzas})`}}>
        </div>
        <div className="aboutBottom">
            <h1> ABOUT US </h1>
            <p>
            "Welcome to PIZZERIA, where we're passionate about creating the best pizza in town.
             Our team of experienced chefs has been perfecting our recipes for years, and we're excited to finally bring our pizza to [City Name].
              We use only the freshest, highest-quality ingredients, and our crusts are made with a special blend of flour that gives them the perfect texture and flavor.
              But what really sets us apart is our commitment to sustainability: we source our ingredients locally whenever possible and take steps to minimize our environmental impact.
             We can't wait to welcome you to our restaurant and show you why we're so passionate about pizza."
            </p>
        </div>
      
    </motion.div>
  )
}

export default About 
