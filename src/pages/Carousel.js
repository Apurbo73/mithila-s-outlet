import React from 'react';
const image1= 'https://static.vecteezy.com/system/resources/previews/004/299/835/original/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg'
const image2 = 'https://static.vecteezy.com/system/resources/previews/007/153/475/original/shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg'
const image3 ='https://www.zealousweb.com/wp-content/uploads/2021/11/best-payment-gateways-banner.jpg';
const image4= 'https://androidjunglee.com/wp-content/uploads/2015/06/big-app-shoppings-android-phones.jpg'
const Carousel = () => {
    return (
        <div className=' mt-4 pt-5'>
            

                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 3" />

                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={image1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            {/* <h5>Mithila's Outlet</h5>
                            <p>Some representative placeholder content for the first slide.</p> */}
                        </div>
                        </div>

                        <div className="carousel-item">
                        <img src={image2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h3 className='text-dark'>Mithila's Outlet</h3>
                            <h6 className='text-dark'>Made shopping fantastic with the best service.</h6>
                        </div>
                        </div>

                        <div className="carousel-item">
                        <img src={image3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2 className='text-dark'>Mithila's Outlet</h2>
                            <h5>Allows the fastest transaction system.</h5>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src={image4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block mt-5">
                            {/* <h2 className='text-light '>Mithila's Outlet</h2> */}
                        </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>




        </div>
    );
};

export default Carousel;