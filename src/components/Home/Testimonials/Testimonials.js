import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import "./Testimonials.css"
import wilson from "../../../images/wilson.png";
import ema from "../../../images/ema.png";
import aliza from "../../../images/aliza.png";

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi suscipit rem culpa rerum. Velit, repellat. Rem sit officia vitae!',
        name: 'Wilson Harry',
        from: 'California',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi suscipit rem culpa rerum. Velit, repellat. Rem sit officia vitae!',
        name: 'Ema Gomez',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta animi suscipit rem culpa rerum. Velit, repellat. Rem sit officia vitae!',
        name: 'Aliza Farari',
        from: 'California',
        img: aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase"> Testimonial </h5>
                    <h1>What our Patients <br/> Says </h1>
                </div>
                <div className="card-deck mt-5">
                    {
                        testimonialData.map(testimonial=> <Testimonial testimonial={testimonial} key={testimonial.name}></Testimonial> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;