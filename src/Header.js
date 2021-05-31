import React from 'react';

const Header = (props) => {
  return (
    <div>
      <header className="py-3 mb-3 border-bottom">
        <div
          className="container-fluid d-grid gap-3 align-items-center"
          style={{ gridTemplateColumns: "1fr 2fr" }}
        >
          <div className="logo">
            <span>
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 1024 1024"
                data-aut-id="icon"
                class=""
                fill-rule="evenodd"
              >
                <path
                  class="rui-77aaa"
                  d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"
                ></path>
              </svg>
            </span>
            <span></span>
          </div>

          <div className="d-flex align-items-center">
            <form className="w-100 me-3">
              <input  
              onChange={(evt)=>{props.setSearch(evt.target.value)}}
                type="search"
                className="form-control"
                placeholder="Find Cars, Mobile Phones and more..."
                aria-label="Search"
              />
            </form>
            <button type="button" class="btn btn-outline-dark">Search</button>
          </div>
        </div>
      </header>




     
    


      <div className = "slider"><div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img height = "350px" src="https://d26a57ydsghvgx.cloudfront.net/product/Customer%20Story%20Images/OLX3.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img height = "350px" src="https://d26a57ydsghvgx.cloudfront.net/product/Customer%20Story%20Images/OLX3.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img height = "350px" src="https://d26a57ydsghvgx.cloudfront.net/product/Customer%20Story%20Images/OLX3.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
    </div>
  );
};

export default Header;
