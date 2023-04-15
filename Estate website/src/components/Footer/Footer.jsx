import "./footer.css"

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="left">
                    <div className="logo">
                        <img src="./logo-black.png" width={180} alt="" />
                    </div>
                    <p className="desc">
                        Our Vision to Make All People<br/> the best place to live for them
                    </p>
                </div>
                <div className="right">
                    <h4 className="title">Information</h4>
                    <div className="details">
                        14 Mohamed Faried st, El-behira
                    </div>
                    <div className="menu">
                        <a href="#" className="link">Property</a>
                        <a href="#" className="link">About</a>
                        <a href="#" className="link">Products</a>
                        <a href="#" className="link">Services</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer