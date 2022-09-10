import React, { useState } from "react";

const GeneralSKU = () => {
  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("")
  const [productNumber, setProductNumber] = useState("")
  const [colors, setColors] = useState<string[]>([])
  const [currentColor, setCurrentColor] = useState("")
  const [sizes, setSizes] = useState<string[]>([]);
  const [currentSize, setCurrentSize] = useState("")

  const addSize = () => {
    setSizes(prev => prev.concat(currentSize))
  }
  const addColor = () => {
    setColors(prev => prev.concat(currentColor))
  }
  return (
    <>
      <div>GeneralSKU</div>
      <input className='border border-black' value={category} onChange={(e) => setCategory(e.target.value)} type="text" />
      <input className='border border-black' value={productName} onChange={(e) => setProductName(e.target.value)} type="text" />
      <input className='border border-black' value={currentSize} onChange={(e) => setCurrentSize(e.target.value)} type="text" />
      <button onClick={addSize}>add size</button>
      <input className='border border-black' value={currentColor} onChange={(e) => setCurrentColor(e.target.value)} type="text" />
      <button onClick={addColor}>add color</button>
      {productName && colors.map(color => (
          <p>{productName && sizes.map(size => (
            <p>{`LWA-${category}-${productName}-${productNumber}-${size}-${color}`}</p>
          ))}</p>
        ))}
    </>
  );
};

export default GeneralSKU;
