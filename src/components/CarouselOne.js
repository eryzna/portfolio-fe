import React, { Component } from 'react';


export default class CarouselOne extends Component {

    render() {
        
      return (
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-inner">

          <div class="carousel-item active carousel-one">
            <svg class="bd-placeholder-img" 
            width="100%" height="242.5px" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="true">
            </svg>
            <div class="container">
              <div class="carousel-caption text-start carousel-caption">
                <h1>Philosophy Tree</h1>
                <p>A full-stack Ruby on Rails/React SPA to browse philosophical movements and their interconnected doctrines.</p>
              </div>
              <a href="https://youtu.be/uVJeQndZlP0">
                  <rect width="100%" height="100%" fill="#e7e5df"/>
              </a>
            </div>
          </div>

          <div class="carousel-item">
            <svg 
            class="bd-placeholder-img carousel-one" 
            width="100%" height="242.5px" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            </svg>
            <div class="container">
              <div class="carousel-caption text-start carousel-caption">
                <h1>Footprint</h1>
                <p>A Ruby Sinatra application to record “green” activities.</p> 
                <br></br>
              </div>
              <a href="https://youtu.be/NWIfcRI0daU">
                <rect width="100%" height="100%" fill="#e7e5df"/>
              </a>
            </div>
            </div>

          <div class="carousel-item">
            <svg 
            class="bd-placeholder-img carousel-one" 
            width="100%" height="242.5px" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            </svg>
            <div class="container">
              <div class="carousel-caption text-start carousel-caption">
                <h1>Monarch Monarchy</h1>
                <p>A full-stack Ruby on Rails/Javascript SPA to view and record adult monarch butterfly sightings.</p>  
              </div>
              <a href="https://youtu.be/Nj9n71LtZf4">
                
                <rect width="100%" height="100%" fill="#e7e5df"/>
              </a>
            </div>
          </div>

          <div class="carousel-item">
          <svg 
            class="bd-placeholder-img carousel-one" 
            width="100%" height="242.5px" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            </svg>
            <div class="container">
              <div class="carousel-caption text-start carousel-caption">
                <h1>Seed Swap</h1>
                <p>A full-stack Ruby on Rails application to connect with and exchange seeds with neighbors.</p>
              </div>
              <a href="https://youtu.be/6vMSosxNMcc">
                <rect width="100%" height="100%" />
              </a>
            </div>
          </div>
        </div>
        
        <button class="carousel-control-prev" type="button" id="carousel-1-prev" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="none">
            
          </span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" id="carousel-1-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        
      </div>
    

            
            )

      }}