import React from "react";
import "./portfolio.css";
import pImg from "../../assets/pfolio.jpg";


const data = [

  {
    id: 2,
    
    title: "clonespotify",
    demo: "https://github.com/AbhayGajjar/clonespotify",
  },
  
  {
    id: 4,
   
    title: "facebook log-in page with taiwind",
    demo: "https://github.com/AbhayGajjar/facebook-log-in-with-tailwind-css",
  },
  {
    id: 5,
    
    title: "TextConverter",
    demo: "https://github.com/AbhayGajjar/TextConverter",
  },
];

const portfolio = () => {
  return (
    <section className="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
      {
          data.map(({id,image,title,github,demo})=>{
              return( 
                <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                 
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  {/* <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  
                  >
                    Live Demo
                  </a> */}
                </div>
              </article>
              )
            })
      }
      </div>
    </section>
  );
};

export default portfolio;
