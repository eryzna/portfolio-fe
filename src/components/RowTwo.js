import React, { Component } from 'react';
import CarouselTwo from './CarouselTwo.js'

export default class RowTwo extends Component {
    

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
                        <img src="/Sunset3-2-l.png" alt="sunset" height="100%" width="100%"></img>
                      </div>
                      <div class="col-md-6 themed-grid-col" id="nested-6-2">
                        <img src="/Sunset3-2-m.png" alt="sunset" height="100%" width="100%"></img>
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