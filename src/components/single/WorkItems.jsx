import React from 'react'
import { useState } from 'react'


const WorkItems = ({item}) => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <>
        <div className="work__card" key={item.id} onClick={() => toggleTab(1)
        }>
            <img src={item.image} alt="" className="work__img" />
            <div className="card__content">
            <h3 className="work__title">{item.title}</h3>
            <span className="work__button" onClick={() => toggleTab(1)}>
                View More
                <i className="bx bx-right-arrow-alt work__button-icon"></i>
            </span>
            </div>

            
        </div>

            </>
    )
}

export default WorkItems