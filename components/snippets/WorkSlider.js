import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Image from 'next/image'

function WorkSlider() {
    const options = {
        items: 3,
        margin: 10,
        nav: true,
        navText:['<Image src="/arrowLeft.png" className="img-fluid" width="26" height="26" alt="slide arrow" />', '<Image src="/arrowRight.png" className="img-fluid" width="26" height="26" alt="slide arrow" />'],
        loop: true,
        // rewind: true,
        // center: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            575:{
                items:2
            },
            768:{
                items:3
            }
        }
    };
    return (
        <OwlCarousel options={options}>
            <div className="item">
                <div className="owl-image" style={{backgroundImage:'url(/slideImage1.webp)'}}>
                    {/* <Image src="/slideImage1.png" className="img-fluid" width="360" height="510" alt="slide image" /> */}
                    <h5>British Colonial Restoration With Modern Extension</h5>
                </div>
            </div>
            <div className="item">
                <div className="owl-image" style={{backgroundImage:'url(/slideImage2.png)'}}>
                    {/* <Image src="/slideImage2.png" className="img-fluid" width="360" height="510" alt="slide image" /> */}
                    <h5>New Residential Area in Hunters Hill</h5>
                </div>
            </div>
            <div className="item">
                <div className="owl-image" style={{backgroundImage:'url(/slideImage3.png)'}}>
                    {/* <Image src="/slideImage3.png" className="img-fluid" width="360" height="510" alt="slide image" /> */}
                    <h5>North Bondi Residential Renovation Project</h5>
                </div>
            </div>
            <div className="item">
                <div className="owl-image" style={{backgroundImage:'url(/slideImage4.webp)'}}>
                    {/* <Image src="/slideImage1.png" className="img-fluid" width="360" height="510" alt="slide image" /> */}
                    <h5>Sydney Eastern Suburbs</h5>
                </div>
            </div>
        </OwlCarousel>

    );
}

export default WorkSlider;