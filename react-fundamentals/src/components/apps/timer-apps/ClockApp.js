import React, {useState, useEffect} from 'react';

const getTimeString = () => {
    const date = new Date(Date.now()).toLocaleString('en-gb', {timeZone: "Europe/London"});
    return date;
}

const ClockApp = () => {
    const [time, setTime] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return(
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation"/>
            <p>{time} in Indianapolis, Indiana</p>
        </div>
    );
};

const ClockApp2 = () => {
    const [time, setTime] = useState(getTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            let date = getTimeString();
            setTime(date);
        }, 1000)

        return () => clearInterval(interval);
    }, [])

    return(
        <div>
            <h1 className="section-title">React Clock</h1>
            <hr className="explanation"/>
            <p>{time} in Dublin, Ireland</p>
        </div>
    );
};

export default ClockApp2;