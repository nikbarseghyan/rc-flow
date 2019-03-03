import React, { useState, useEffect, useContext, memo , lazy } from 'react';
import { music } from './Context';

const OtherComponent = lazy(()=> import('./Context') );
const fetchUser = async(setCount) => {
    const response = await fetch('https://randomuser.ru/');
    const data = await response.json();
    setCount(data.results[ 0 ])
}

const Effect = ()=> {
    const [ count, setCount ] = useState(0);
    const importContext = useContext(music);
    const [ data, setDate ] = useState();

    useEffect(()=>{
      fetchUser(setCount)
    }, [] )
    return(
        <>
            <h1>{count}</h1>
            <button onClick={ ()=> setCount(count+1) }>Plus</button>
            <button onClick={ ()=> setCount(count-1) }>Minus</button>
        </>
    )
}

export default memo(Effect);