import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap';
import '../_custom.scss';
import '../alan-turing.png';

class Intro extends Component {
  render() {
    return (
      <div className="App" >
        <div>
          {/* <div class="animation" ontouchstart="this.classList.toggle('hover');">
          </div> */}
          {/* <figure class="figure">
            <img src="https://cdn-images-1.medium.com/max/1600/1*FCZMG2AgKPDXqXyOtV4faA.png" class="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
              <figcaption class="figure-caption">A caption for the above image.</figcaption>
          </figure> */}
            <div class="jumbotron">
              <h1 class="display-4">Simple Cipher</h1>
              <p class="lead">We can only see a short distance ahead, but we can see plenty there that needs to be done. <br />- Alan Turing</p>
              <hr class="my-4" />
              <Link to="/reveal" className='links'> <a class="btn btn-primary btn-lg" href="#" role="button" link>Decrypt Something</a></Link>
            </div>
        </div>
        </div>
        );
      }
    }
    
    export default Intro;
