import CountUp from 'react-countup';
import "./hero.css"
import {MdLocationOn} from "react-icons/md"
import {motion} from "framer-motion"

function Hero() {
    return (
        <div className="hero-sec">
            <div className="container">
                <div className="left">
                    <motion.h1 
                        initial={{y:'2rem',opacity:0}} 
                        animate={{y:0,opacity:1}}
                        transition={{duration:2,type:"spring"}}
                        className="title">
                            <span>Discover</span><br/>Most Suitable Property
                    </motion.h1>
                    <div className="desc">
                        <span>Estate websites are attracting many visits.</span>
                        <span>Buyers can preview of homes within a few hours.</span>
                    </div>
                    <div className="search-box">
                        <MdLocationOn size={35}/>
                        <input type="text" />
                        <button className="button h-button">Search</button>
                    </div>
                    <div className="numbres-counter">
                        <div className="numbre">
                            <div><CountUp start={8000} end={8750} duration={2}/><span className='plus'>+</span></div>
                            <p>Premium Products</p>
                        </div>
                        <div className="numbre">
                            <div><CountUp start={3323} end={3456} duration={2}/><span className='plus'>+</span></div>
                            <p>Happy Customers</p>
                        </div>
                        <div className="numbre">
                            <div><CountUp start={0} end={32} duration={2}/><span className='plus'>+</span></div>
                            <p>Award Winning</p>
                        </div>
                    </div>
                </div>
                <motion.div
                        initial={{x:'7rem',opacity:0}} 
                        animate={{x:0,opacity:1}}
                        transition={{duration:4,type:"spring"}}
                    className="right">
                    <img src="./hero-img.jpg" alt="" />
                </motion.div>
            </div>
        </div>
    )
} 

export default Hero