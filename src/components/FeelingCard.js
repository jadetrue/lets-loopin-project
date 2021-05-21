import React from 'react';
import PropTypes from 'prop-types';
import '../container/_app.scss';

export default function FeelingCard(props) {
    const {mood} = props;

    const currDate = new Date();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const month = months[currDate.getMonth()];
    const day = currDate.getDate();
    const year = currDate.getFullYear();

    const nth = function(d) {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    }

    return (
        <div className="container">
            <div className="currentDate">
                <h2 className={`subtitle ${mood}`}>Today</h2>
                <p className={`date ${mood}`}>{day}{nth(day)} {month} {year}</p>
            </div>
            <div className="title">
                { !mood && 
                    <h1 className="undefined">How are you feeling today?</h1>
                }
                { mood && 
                    <h1 className={mood}>Your mood is {mood}</h1>
                }
            </div> 
        </div> 
     )
}

// Props below

FeelingCard.propTypes = {
    mood: PropTypes.oneOf([ "happy", "okay", "sad" ]),
    date: PropTypes.func,
}

FeelingCard.defaultProps = {
    mood: undefined,
    date: PropTypes.func,
}