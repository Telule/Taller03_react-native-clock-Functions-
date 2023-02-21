import { useEffect, useState } from "react";


export default function Clock() {
    let [time, setTime] = useState('00:00');

    useEffect(() => {
        console.log('ComponentDidMout Called')
        let tick = setInterval(() => {
            setTime(new Date().toLocaleTimeString)
        }, 1000);
        
        return () => {
            clearInterval(tick);
        }
    });



    return (
        <View>
            <Text>
                {time}
            </Text>
        </View>


    );


}