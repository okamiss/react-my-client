import { useState } from 'react' 
import { useSpring, useSpringRef, animated } from '@react-spring/web' 
const ApiComponent = () => { 
  const api = useSpringRef() 
  const springs = useSpring({ 
    ref: api, 
    from: { x: 0 }, 
  }) 
  const handleClick = () => { 
    api.start({ 
      to: { 
        x: springs.x.get() === 100 ? 0 : 100, 
      }, 
    }) 
  } 
  return ( 
    <div className="flex-container"> 
      <animated.div         
      onClick={handleClick}         
      style={{           
        width: 80,           
        height: 80,           
        background: '#ff6d6d',           
        borderRadius: 8,           
        ...springs,         
      }}       
  	/> 
  	<span>Render ID – {Math.random()}</span> 
  </div> 
  ) 
} 
const StateComponent = () => { 
  const [forward, setForward] = useState(false) 
  const springs = useSpring({ 
    x: forward ? 100 : 0, 
    opacity:  forward ? 100 : 0, 
  }) 
  const handleClick = () => { 
    setForward(s => !s) 
  } 
  return ( 
    <div className="flex-container"> 
      <animated.div         
      onClick={handleClick}         
      style={{           
        width: 80,           
        height: 80,           
        background: '#ff6d6d',           
        borderRadius: 8,           
        ...springs,         
      }}       
  	/>  
  	<span>Render ID – {Math.random()}</span> 
  </div> 
  ) 
} 
export default function MyComponent() { 
  return ( 
    <div className="flex-container--column"> 
      <ApiComponent /> 
    	<StateComponent /> 
    </div> 
  ) 
}
