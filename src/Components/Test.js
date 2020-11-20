import React from 'react';
import { Swiper } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import SwiperCore, {  Pagination } from 'swiper';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faSass } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';

SwiperCore.use([Pagination]);

class Test extends React.Component {
    componentDidMount(){
         this.swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            });
            }

        render() {
            return (
                <div className="swiper-container" >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide slideIcon">
                            <FontAwesomeIcon className='skillIcon'icon={faHtml5}/>
                            <h3>HTML 5</h3>
                        </div>
                        <div className="swiper-slide slideIcon">
                            <FontAwesomeIcon className='skillIcon'icon={faCss3Alt}/>
                            <h3>CSS 3</h3>
                        </div>
                        <div className="swiper-slide slideIcon">
                            <FontAwesomeIcon className='skillIcon sass'icon={faSass}/>
                            <h3>Sass</h3>
                        </div>
                        <div className="swiper-slide slideIcon">
                            <FontAwesomeIcon className='skillIcon'icon={faJs}/>
                            <h3>Javascript</h3>
                        </div>
                        <div className="swiper-slide slideIcon">
                            <FontAwesomeIcon className='skillIcon'icon={faBootstrap}/>
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="swiper-slide slideIcon">
                            <FontAwesomeIcon className='skillIcon'icon={faReact}/>
                            <h3>React</h3>
                        </div>
                        <div className="swiper-slide slideIcon">
                            <FontAwesomeIcon className='skillIcon'icon={faGithub}/>
                            <h3>Git</h3>
                        </div>
                        
                    </div>
                    
                    <div className="swiper-pagination"></div>
                </div>
        )       
    }
    
}
export default Test;