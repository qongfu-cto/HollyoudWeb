import {useCallback, useEffect, useState} from 'react';
import {isEmpty} from 'lodash';
import moment from 'moment';

type businessHours = {
    day: number;
    open24Hrs: boolean;
    closed: boolean;
    timings: {
        startTime: string;
        endTime: string;
    }[];
}[];

export const useBusinessHoursTiming = (businessHours: businessHours):[timingText:string, timing:{
    start: string,
    end: string
} ] => {

    const date = new Date();
    const dayOfWeek = date.getDay();
    const [timingText, setTimingText] = useState<string>('');
    const [timing, setTiming] = useState({
        start: '00:00',
        end: '00:00'
    });
    const timeAM = '04:00';
    useEffect(() => {
        currentTime()
    }, [])

   const getTime =(time:string)=>{
    time.charAt(1)=="0" &&  time.charAt(0)=="0"? "24:00": time

    return time
   }

   let currentHour = moment().format('HH:mm');
   currentHour= getTime(currentHour)

    const currentTime = useCallback(() => {
        let flag = false;

        if (!isEmpty(businessHours)) {
            if (
               
                businessHours[dayOfWeek].closed
            ) {
                setTimingText('Closed');
            } else {
                const timingArray = businessHours[dayOfWeek]?.timings;
                const open24h = businessHours[dayOfWeek].open24Hrs;
                const openShop = timingArray.find(time => {
                    let startTime = moment(time.startTime, 'HH:mm').format('HH:MM ');
                   startTime= getTime(startTime)
                    let endTime = moment(time.endTime, 'HH:mm').format('HH:MM ');
                    endTime= getTime(endTime)
                 



//console.log( {startTime, endTime ,timeAM, currentHour  })
                    if (currentHour >= startTime && endTime >= currentHour) {
                        setTimingText('Open Now');
                        setTiming({
                            start: moment(time?.startTime, 'HH:mm').format('hh:mm a'),
                            end: moment(time?.endTime, 'HH:mm').format('hh:mm a')
                        });
                        return time;
                    }
                      else if (currentHour >= startTime && endTime <= timeAM) {
                       
                        setTimingText('Open Now');
                        setTiming({
                             start: moment(time?.startTime, 'HH:mm').format('hh:mm a'),
                            end: moment(time?.endTime, 'HH:mm').format('hh:mm a')
                         });
                     return time;
                    
                        }

                });

                if (open24h) {
                    setTimingText('Open Now');
                    setTiming({
                        ...timing,
                        start: '0'
                    });
                }

                if (!openShop && !open24h) {
                    setTimingText('Closed');
                    setTiming({ start: '00:00',
                    end: '00:00'});
                }
            }
        } else {
            setTimingText('Closed');
        }
    }, [currentHour, businessHours, dayOfWeek,timing]);

    return [timingText, timing];
};
