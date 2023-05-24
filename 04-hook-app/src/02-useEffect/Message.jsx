import { useEffect, useState } from "react";

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0})
    
    useEffect(() => {
      //console.log('componenete montado')
      const onMouseMove = ({x, y}) => {
        const coords = {x, y}
        console.log(coords)
        setCoords(coords)
      }
      window.addEventListener('mousemove', onMouseMove);
        
      return () => {
        //console.log('componenete desmontado')
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    
   return (
      <>
         <h3>Usuario ya existe</h3>
         <p>{JSON.stringify(coords)}</p>
      </>
   )
};