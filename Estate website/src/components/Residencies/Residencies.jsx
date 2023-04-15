import {GrFormNextLink,GrFormPreviousLink} from "react-icons/gr"
import { Swiper, SwiperSlide ,useSwiper} from 'swiper/react';
import {sliderData as data} from '../../data/SliderData';
import 'swiper/css';
import './residencies.css'
import { settings } from './SwiperSettings';

function Residencies() {
    return (
        <div className="residencies">
            <div className="container">
                <h4 className="sm-title">Best Choices</h4>
                <h3 className="lg-title">Popular Residencies</h3>
                
                <Swiper {...settings}>
                    <Buttons/>
                    {data.map((card,index)=>(
                        <SwiperSlide key={index}>
                            <div className="card">
                                <div className="image">
                                    <img src={card.img} alt="" />
                                </div>
                                <div className="price">
                                <span>$</span>{card.price}
                                </div>
                                <h4 className="title">
                                    {card.title}
                                </h4>
                                <p className="desc">
                                    {card.desc}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Residencies

const Buttons = ()=>{
    const swiper = useSwiper();
    return(
        <>
            <div className="buttons">
                <button className='s-button' onClick={()=>swiper.slidePrev()}><GrFormPreviousLink size={20}/></button>
                <button className='s-button' onClick={()=>swiper.slideNext()}><GrFormNextLink size={20}/></button>
            </div>
        </>
    )
}