import React, { Component } from 'react';

export default class CarouselOne extends Component {

  //imgHover = () => {
  //  let divEl = document.querySelector('#nested-4');
  //  let imgOne = document.querySelector('#Gustav-1');
  //  //let imgOne = document.getElementsByTagName('img');
  //  //let imgOne = document.querySelector('#Gustav-1')
  //  //let imgTwo = document.querySelector('#Gustav-2')
  //  let items = [...document.getElementsByClassName('carousel-item')];
//
  //  items.forEach(e => e.addEventListener ('mouseover', () => 
  //      e.classList.add('overlay')
  //  ))
//
  //  items.forEach(e => e.addEventListener ('mouseleave', () => 
  //      e.classList.remove('overlay')
  //  ))
//
  //  divEl.addEventListener('mouseenter', () => 
  //    divEl.style.backgroundColor = "blue"
  //  )
  //  imgOne.addEventListener('mouseenter', () => 
  //    imgOne.style.backgroundColor = "blue"
  //  )
  //  divEl.addEventListener('mouseover', () => console.log('Event: mouseover'));
  //  }
//

    render() {
        
      return (
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        
        <div class="carousel-inner">

          <div class="carousel-item active carousel-one">
            <svg class="bd-placeholder-img" 
            width="100%" height="260px" 
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
            width="100%" height="260px" 
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
            width="100%" height="260px" 
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
              <a href="https://youtu.be/dZZctpTLE-w">
                <rect width="100%" height="100%" fill="#e7e5df"/>
              </a>
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
          <span class="carousel-control-prev-icon" aria-hidden="true">
            <img src="./Arrows-01.png"></img>
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