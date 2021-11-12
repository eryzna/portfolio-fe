
import '../index.css';
import React, { Component } from 'react';

export default class DevRow extends Component {
  
  
    render() {
        
      return (

          <div class="container-fluid">
            <div class="row mb-auto row-1">
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-1">
                <a href="#"><img src="portfolio-fe/Cactus1_125_2.png" id="cactus-1" alt="sketch of cactus" height="100%" width="100%"></img></a>

              </div>
              <div class="col-md-6 themed-grid-col grid-border" id="r1-6">
                <div class= "grid-border" id="grid-label">
                  <h4>Development Projects</h4>
                </div>
              </div>
              <div class="col-md-3 themed-grid-col grid-border" id="col-3-2">
                <a href="#"><img src="portfolio-fe/Cat_1.png" id="cat-1" alt="sketch of cat" height="100%" width="100%"></img></a>
              </div>
            </div>
            
          </div>

      )
    }
}