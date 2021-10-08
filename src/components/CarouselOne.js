import React, { Component } from 'react';

export default class CarouselOne extends Component {


    render() {
        
      return (
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-inner">

          <div class="carousel-item active">
            <svg class="bd-placeholder-img" 
            width="100%" height="260px" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="true">
                <a href="https://youtu.be/uVJeQndZlP0">
                <rect width="100%" height="100%" fill="#e7e5df"/>
                </a>
            </svg>
            <div class="container">
              <div class="carousel-caption text-start carousel-caption">
                <h1>Philosophy Tree</h1>
                <p>A full-stack Ruby on Rails/React SPA to browse philosophical movements and their interconnected doctrines.</p>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <svg 
            class="bd-placeholder-img carousel-one" 
            width="100%" height="260px" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            <a href="https://youtu.be/NWIfcRI0daU">
                <rect width="100%" height="100%" fill="#e7e5df"/>
            </a>
            </svg>
            <div class="container">
              <div class="carousel-caption text-start carousel-caption">
                <h1>Footprint</h1>
                <p>A Ruby Sinatra application to record “green” activities.</p> 
                <br></br>
              </div>
            </div>
            </div>

          <div class="carousel-item">
            <svg 
            class="bd-placeholder-img carousel-one" 
            width="100%" height="260px" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            <a href="https://youtu.be/dZZctpTLE-w">
                <rect width="100%" height="100%" fill="#e7e5df"/>
            </a>
            </svg>
            <div class="container">
              <div class="carousel-caption text-start carousel-caption">
                <h1>Monarch Monarchy</h1>
                <p>A full-stack Ruby on Rails/Javascript SPA to view and record adult monarch butterfly sightings.</p>  
              </div>
            </div>
          </div>

          <div class="carousel-item">
          <svg 
            class="bd-placeholder-img carousel-one" 
            width="100%" height="260px" 
            xmlns="http://www.w3.org/2000/svg" 
            aria-hidden="true" 
            preserveAspectRatio="xMidYMid slice" 
            focusable="false">
            <a href="https://youtu.be/6vMSosxNMcc">
                <rect width="100%" height="100%" fill="#e7e5df"/>
            </a>
            </svg>
            <div class="container">
              <div class="carousel-caption text-start carousel-caption">
                <h1>Seed Swap</h1>
                <p>A full-stack Ruby on Rails application to connect with and exchange seeds with neighbors.</p>
              </div>
            </div>
          </div>
        </div>
        
        <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true" id="c-1-next"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        
      </div>
    

            
            )

      }}