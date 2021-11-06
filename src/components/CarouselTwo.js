import React, { Component } from 'react';

export default class CarouselTwo extends Component {
    


    render() {
        
      return (
        <div id="myCarouselTwo" class="carousel slide carousel-2" data-bs-ride="carousel-2">
        
        <div class="carousel-inner">
          <div class="carousel-item active carousel-images">
            <img src="portfolio-fe/StippleSkull_1.png" height="390px" alt="skull illustration"></img>
          </div>
          <div class="carousel-item carousel-images">
            <img src="portfolio-fe/Gustav-2.png" height="390px" alt="pink cat illustration"></img>

          </div>
          <div class="carousel-item carousel-images">
            <img src="portfolio-fe/ThorensMusicBoxElana.jpg" width="100%" height="390px"  alt="illustration of music box"></img>

          </div>
          <div class="carousel-item carousel-images">
              <img src="portfolio-fe/Gustav-1.jpg" height="390px" alt="green cat illustration"></img>
                
          </div>
        </div>

        <button class="carousel-control-prev control-button" id="carousel-2-prev" type="button" data-bs-target="#myCarouselTwo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" id="carousel-2-next" type="button" data-bs-target="#myCarouselTwo" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    

            
            )

      }}