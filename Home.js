import React from 'react'
 import pick from './pick4.jpg'
  import pick1 from './pick5.webp'
 import pick2 from './pick4.jpg'
import p from './backgroundimage1.jpg'
export default function Home() {
  return (
    <>
   
    <div className='container-fluid '></div>
    <div className="row">
      <div className="col-md-12">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">    
            <div className="carousel-item active">
              <img src={pick} alt='./' className="img-fluid" class="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={pick1} alt='./' className="img-fluid" class="d-block w-100" />
            </div>
            <div className="carousel-item">
              <img src={pick2}alt="./" className="img-fluid" class="d-block w-100" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
    <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6  p-4'>
              <h1 className='pt-5'>Hi </h1>
              <h2>  <span>I'm</span> ABC,<br/><span>Front-end Developer</span></h2><br/>
              <p className='pt-1'>Sometimes, you may need to position one image on top of another. <br/>This can be easily done with HTML and CSS. For that, you can use the CSS position and z-index properties. First, we </p>
        </div>
        <div className='col-md-6 p-5'>
          <img src={p} className='img-fluid' alt='...'width={200} />
        </div>
      </div>
      < div className='footer'>
        <div className='col-md-12 mt-4'>  
          </div>
        </div>
        </div>  
    </>
  )
}
 
