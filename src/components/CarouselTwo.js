import React, { Component } from 'react';

export default class CarouselTwo extends Component {
    


    render() {
        
      return (
        <div id="myCarouselTwo" class="carousel slide carousel-2" data-bs-ride="carousel-2">
        
        <div class="carousel-inner">
          <div class="carousel-item active carousel-images">
            <img id="skull" class="art-images" src="portfolio-fe/StippleSkull_thumb.png"  alt="skull illustration"></img>
          </div>
          <div class="carousel-item carousel-images">
            <img src="portfolio-fe/Gustav-2.png" class="art-images" id="pink-cat" alt="pink cat illustration"></img>

          </div>
          <div class="carousel-item carousel-images">
            <img src="portfolio-fe/Thorens_thumb.png" class="art-images" id="thorens"  alt="illustration of music box"></img>

          </div>
          <div class="carousel-item carousel-images">
              <img src="portfolio-fe/Gustav-1.jpg" class="art-images" id="green-cat" alt="green cat illustration"></img>
                
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