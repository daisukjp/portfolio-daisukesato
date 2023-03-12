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
            {/* <div className={toggleState === 1 ? "work__model active-model" : "work__model"}>
                <div className="work__model-content">
                    <i onClick={() => toggleTab(0)} className="uil uil-times service__model-close">
                    </i>
                    <h3 className="work__model-title">
                        hello
                    </h3>
                    <p className="work__model-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis necessitatibus impedit repudiandae eum illo esse sapiente quidem eveniet culpa reiciendis eius, sint id cumque fugiat ullam possimus qui eaque cupiditate!
                    </p>
                    <ul className="work__model-services grid">
                        <li className="work__model-service">
                            <i className="uil uil-check-circle"></i>
                            <p className="work__model-info">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nam perferendis, ratione, repellat sequi magnam dignissimos ea, quibusdam eos eum sed? Tenetur commodi ipsa dolorem placeat rem aliquid accusantium doloribus!
                            </p>
                        </li>
                    </ul>
                </div>
            </div> */}
            </>
    )
}

export default WorkItems