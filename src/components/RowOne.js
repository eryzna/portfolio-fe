import React, { Component } from 'react';
import CarouselOne from './CarouselOne.js'
import '../index.css';
export default class RowOne extends Component {
    
    componentDidMount = () => {
      this.getCactus()
      this.getCat()
    }

    
    
    getCactus = () => {
      let cactus = document.getElementById("cactus-1")
      cactus.addEventListener('click', () => {
        if (cactus.getAttribute("src") == "/Cactus1_125_2.png") {
          cactus.src = "/Cactus2_125.png"
        } else {
          cactus.src = "/Cactus1_125_2.png"
        }
      })
      
    }

    getCat = () => {
      let cat = document.getElementById("cat-1")
      cat.addEventListener('click', () => {
        if (cat.getAttribute("src") == "/Cat_1.png") {
          console.log('cat 1')
          cat.src = "/Cat_2.png"
        } else {
          console.log('cat-2')
          cat.src = "/Cat_1.png"
        }
      })
    }

   
    
  
  
    render() {
        
      return (

        
          <div class="container-fluid">
            <div class="row mb-auto row-1">
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-1">
                <a href="#"><img src="/Cactus1_125_2.png" id="cactus-1" alt="sketch of cactus" height="100%" width="100%"></img></a>

              </div>
              <div class="col-md-6 themed-grid-col grid-border" id="r1-6">
                <div class= "grid-border" id="grid-label">
                  <h4>Development Projects</h4>
                </div>
                <CarouselOne />
              </div>
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-2">
                <a href="#"><img src="/Cat_1.png" id="cat-1" alt="sketch of cat" height="100%" width="100%"></img></a>
              </div>
            </div>
            
          </div>

      )
    }
}