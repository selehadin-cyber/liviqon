import React, { useEffect, useState } from 'react'

const Size = () => {
    const [width, setWidth] = useState(0)
    const [length, setLength] = useState(0)
    const [wininches, setWininches] = useState(0)
    const [lininches, setLininches] = useState(0)

    const convert = (cm: number) => {
        let inches = cm / 2.54
        return Math.round(inches * 10) / 10
    }
    useEffect(() => {
      setLininches(convert(length))
      setWininches(convert(width))
    }, [width, length])
    
  return (
    <>
        <div>Size</div>
        <input className='border border-black' value={width} onChange={(e) => setWidth(parseInt(e.target.value))} type="text" />
        <input className='border border-black' value={length} onChange={(e) => setLength(parseInt(e.target.value))} type="text" />
        <p>{wininches} x {lininches} Inches ( {width} x {length} cm)</p>
    </>
    

  )
}

export default Size