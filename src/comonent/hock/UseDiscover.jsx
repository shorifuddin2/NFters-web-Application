import { useState } from "react"
import { useEffect } from "react"


const UseDiscover = ()=>{
    const[Card, setCard]=useState([])
    useEffect(()=>{
        fetch('card.json')
        .then(response => response.json())
        .then(json => setCard(json))
},[])
    return [Card,setCard]
}

export default UseDiscover;