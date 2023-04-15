import "./value.css"
import {data} from "./../../data/Accordion"
import {AiOutlineCaretDown} from "react-icons/ai"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function Value() {
    return (
        <div className="value-sec">
            <div className="container">
                <div className="left">
                    <div className="image">
                        <img src="./value.jpg" alt="" />
                    </div>
                </div>
                <div className="right">
                    <h4 className="sm-title">Our Value</h4>
                    <h3 className="lg-title">Value We Give to You.</h3>
                    <p className="desc">
                        Estate relates to property ownership and asset value.<br/>
                        It can also describe the total assets of an investments.
                    </p>
                    <div className="fq-sec">
                        <Accordion allowZeroExpanded={true} className="accordian">
                            {
                                data.map((item,index)=>(
                                    <AccordionItem className="accordion-item" uuid={index} key={index}>
                                        <AccordionItemHeading className="accordion-heading">
                                            <AccordionItemButton className="accordion-button">
                                                {item.icon}
                                                <h3 className="title">{item.title}</h3>
                                                <AiOutlineCaretDown/>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className="accordion-panel">
                                            {item.desc}
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Value