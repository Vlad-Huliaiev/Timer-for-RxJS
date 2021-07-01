import React, { useState, useEffect } from 'react';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import "./TimerRx.css";

const Timer = ({ startTime }) => {
    const [time, setTime] = useState(startTime);
    const [isActive, setIsActive] = useState(false);

    const start = () =>  {
        setIsActive(!isActive);
    }

    const stop = () => {
        setTime(startTime);
        setIsActive(!isActive);
    }

    const wait = () => {
        setIsActive(false);
    }

    const reset = () => {
        setTime(startTime);
        setIsActive(true);
    }

    useEffect(() => {
        const unsubscribe$ = new Subject();
        interval(1000)
            .pipe(takeUntil(unsubscribe$))
            .subscribe(() => {
                if (isActive) {
                    setTime(time => time + 1000);
                }
            });
        
        return () => {
            unsubscribe$.next();
            unsubscribe$.complete();
        };
    }, [isActive]);

    const hourMinSec = (s) => {
        let sec = parseInt((s / 1000) % 60),
            min = parseInt((s / (1000 * 60)) % 60),
            hour = parseInt((s / (1000 * 60 * 60)) % 24)

        sec = (sec < 10) ? '0' + sec : sec;
        min = (min < 10) ? '0' + min : min;
        hour = (hour < 10) ? '0' + hour : hour;

        return hour + ':' + min + ':' + sec;
    }

    return (
        <div className="appRx">
            <h2>Timer RxJS + React</h2>
            <div className="timeRx">
                {hourMinSec(time)}
            </div>
            <div className="rowRx">
                <button className={`buttonRx button-primaryRx-${isActive ? 'active' : 'inactive'}`} onClick={isActive ? stop : start}>
                    {isActive ? 'Stop' : 'Start'}
                </button>
                <button className="buttonRx" onDoubleClick={wait}>
                    Wait
                </button>
                <button className="buttonRx" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Timer;