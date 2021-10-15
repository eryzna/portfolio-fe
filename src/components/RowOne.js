import React, { Component } from 'react';
import CarouselOne from './CarouselOne.js'
export default class RowOne extends Component {
    
    componentDidMount = () => {
      this.getCactus()
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

   
    
  
  
    render() {
        
      return (

        
          <div class="container-fluid">
            <div class="row mb-auto row-1">
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-1">
                <img src="/Cactus1_125_2.png" id="cactus-1" alt="cactus" height="100%" width="100%"></img>
              </div>
              <div class="col-md-6 themed-grid-col grid-border" id="r1-6">
                <div class= "grid-border" id="grid-label">
                  <h4>Development Projects</h4>
                </div>
                <CarouselOne />
              </div>
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-2">
                <img src="/Sunset3-1-r.png" alt="sunset" height="100%" width="100%"></img>
              </div>
            </div>
            
          </div>

      )
    }
}