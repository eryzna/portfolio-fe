import React, { Component } from 'react';

export default class CarouselTwo extends Component {
    


    render() {
        
      return (
        <div id="myCarouselTwo" class="carousel slide carousel-2" data-bs-ride="carousel-2">
        
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/StippleSkull_1.png" height="390px" alt="skull illustration"></img>
          </div>
          <div class="carousel-item">
            <img src="/Gustav-2.png" id="Gustav-2" height="390px" alt="pink cat illustration"></img>

          </div>
          <div class="carousel-item">
              <img src="/Gustav-1.jpg" id="Gustav-1" height="390px" alt="green cat illustration"></img>
                
          </div>
        </div>

        <button class="carousel-control-prev control-button" type="button" data-bs-target="#myCarouselTwo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarouselTwo" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    

            
            )

      }}