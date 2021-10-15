import React, { Component } from 'react';
import CarouselTwo from './CarouselTwo.js'

export default class RowTwo extends Component {
    
  componentDidMount = () => {
    this.getLeftMountain()
    this.getRightMountain()

  }
  
  getLeftMountain = () => {
    let mountain = document.getElementById("mountain-l")
    mountain.addEventListener('click', () => {
      if (mountain.getAttribute("src") == "/Mountain_L_1.png") {
        mountain.src = "/Mountain_L_2.png"
      } else {
        mountain.src = "/Mountain_L_1.png"
      }
    })
  }

  getRightMountain = () => {
    let mountain = document.getElementById("mountain-r")
    mountain.addEventListener('click', () => {
      if (mountain.getAttribute("src") == "/Mountain_R_1.png") {
        mountain.src = "/Mountain_R_2.png"
      } else {
        mountain.src = "/Mountain_R_1.png"
      }
    })
  }

    render() {
        
      return (

        <div class="container-fluid">

            <div class="row mb-auto row-1 grid-border">
                <div class="col-md-8 themed-grid-col" id="nested-columns">
                    <div class="pb-3 nested-rows" id="nested-8">
                      <h2 class="grid-text"> Greetings! My name is Elana. I am a full-stack developer and artist.</h2>
                    </div>
                    <div class="row nested-rows">
                      <div class="col-md-6 themed-grid-col" id="nested-6-1">
                        <img src="/Mountain_L_1.png" id="mountain-l" alt="mountain" height="100%" width="100%"></img>
                      </div>
                      <div class="col-md-6 themed-grid-col" id="nested-6-2">
                        <img src="/Mountain_R_1.png" id="mountain-r" alt="mountain" height="100%" width="100%"></img>
                      </div>
                    </div>
                </div>
                <div class="col-md-4 themed-grid-col" id="nested-4"> 
                  <div class= "grid-border" id="grid-label">
                    <h4>Art</h4>
                  </div>
                  <CarouselTwo />
                </div>
            </div>
        </div>

      )
    }
}