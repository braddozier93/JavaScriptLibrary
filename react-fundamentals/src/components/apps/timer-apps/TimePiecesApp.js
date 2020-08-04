import React from 'react';
import TimerApp from './TimerApp';
import ClockApp2 from './ClockApp';
import StopWatchApp from './StopWatchApp';

const TimePiecesApp = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <TimerApp />
                <hr />
                <ClockApp2 />
                <hr />
                <StopWatchApp />
            </div>
        </div>

    )
}

export default TimePiecesApp;
