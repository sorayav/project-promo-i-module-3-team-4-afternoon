import React from 'react';
import '../../stylesheets/form.scss';

const Design = props => {
    const {userInfo} = props;

    function handleChoice(evt) {
        let target = evt.target
        props.handleChoice(target)
    }

    return (
        <div className="design--bottom">
            <h3 className="design-subtitle">Colores</h3>
            <ul>
                <li>
                    <input
                        className="check"
                        id="1"
                        type="radio"
                        value="1"
                        name="colorCard"
                        onChange={handleChoice}
                        checked={userInfo === '1' ? true : false}
                    />
                    <label className="colorForm">
                        <div className="palette colorbox1"></div>
                        <div className="palette colorbox2"></div>
                        <div className="palette colorbox3"></div>
                    </label>

                </li>
                <li>
                    <input className="check"
                        id="2"
                        type="radio"
                        value="2"
                        name="colorCard"
                        onChange={handleChoice}
                        checked={userInfo === '2' ? true : false}
                    />
                    <label className="colorForm">
                        <div className="palette colorbox4"></div>
                        <div className="palette colorbox5"></div>
                        <div className="palette colorbox6"></div>
                    </label>
                </li>
                <li>
                    <input className="check"
                        id="3"
                        type="radio"
                        value="3"
                        name="colorCard"
                        checked={userInfo === '3' ? true : false}
                        onChange={handleChoice} />
                    <label className="colorForm">
                        <div className="palette colorbox7"></div>
                        <div className="palette colorbox8"></div>
                        <div className="palette colorbox9"></div>
                    </label>
                </li>
            </ul>
        </div>

    );
}

export default Design;