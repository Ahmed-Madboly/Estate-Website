import './contact.css'
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {RiMessage2Fill} from "react-icons/ri"
import Box from './Box'

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="left">
                    <h3 className="sm-title">Our Contact</h3>
                    <h2 className="lg-title">
                        Easy To Contact Us.
                    </h2>
                    <p className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis iure voluptates quaerat ullam autem, architecto odit consequatur delectus veniam eum.
                    </p>
                    <div className="contact-boxes">
                        <div className="row">
                            <Box title="Call" num="+201093481980" icon={<MdCall/>} btn="Call Now"/>
                            <Box title="Chat" num="+201093481980" icon={<BsFillChatDotsFill/>} btn="Chat Now"/>
                        </div>
                        <div className="row">
                            <Box title="Video Call" num="+201093481980" icon={<BsFillChatDotsFill/>} btn="Video Call Now"/>
                            <Box title="Message" num="+201093481980" icon={<RiMessage2Fill/>} btn="Message Now"/>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="image">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact