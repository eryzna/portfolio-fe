import React, { Component } from 'react';
import Nav from './Nav'

export default class Art extends Component {

    render() {
        return (
            <>
            <Nav />
            <div class="container-fluid">
            <div class="row">
              <div class="col grid-border">
                <h2>Art page forthcoming...</h2>  
              </div>
            </div>
            <div class="row">
              <div class="col grid-border">
                <img class="img-fluid" src="/portfolio-fe/Gustav-3.png" width="32.5%"></img>
              </div>
            </div>
            
          </div>
            </>

        )
    }

}