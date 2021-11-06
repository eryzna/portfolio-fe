import React, { Component } from 'react';

//<a class="brand" href="#">
//                      <img src="Stars-06.svg" class="brand" id="icon" alt="cat silhouette"></img>
//                      </a>

export default class Nav extends Component {
    

    render() {
        
      return (
        
            <nav class="navbar navbar-expand-lg navbar-light nav-border" aria-label="Eleventh navbar example">
                <div class="container-fluid">
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExample09">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0" > 
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/portfolio-fe" id="nav-link-1">Home</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/development" id="nav-link-2">Development</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="/art" id="nav-link-3">Art</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" href="contact" id="nav-link-4">Contact</a>
                            </li>
              
                        
                        </ul>
                    </div>


                </div>
            </nav>
        
        
      )}
}

//<img src="cat_silhouette.png" class="brand" id="icon" alt="cat silhouette"></img>