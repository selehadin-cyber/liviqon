import React, { useState } from 'react'

const GardenSKU = () => {
    const [signNumber, setSignNumber] = useState("")
    const [productName, setProductName] = useState("")
    const sizes = ["19.3", "27.2", "39", "54.3", "78"]
  return (
    <section>
        <h2>Garden SKU automation</h2>
        <p>ürün adı</p>
        <input className='border border-black' value={productName} onChange={(e) => setProductName(e.target.value)} type="text" />
        <p>ürün sıra numarası</p>
        <input className='border border-black' value={signNumber} onChange={(e) => setSignNumber(e.target.value)} type="text" />
        <p>Black</p>
        {productName && sizes.map(size => (
          <p>{`LWA-CS-${productName}-${signNumber}-${size}-BLK`}</p>
        ))}
        <p>White</p>
        {productName && sizes.map(size => (
          <p>{`LWA-CS-${productName}-${signNumber}-${size}-WHT`}</p>
        ))}
        <p>Gold</p>
        {productName && sizes.map(size => (
          <p>{`LWA-CS-${productName}-${signNumber}-${size}-GLD`}</p>
        ))}
        <p>Copper</p>
        {productName && sizes.map(size => (
          <p>{`LWA-CS-${productName}-${signNumber}-${size}-CPR`}</p>
        ))}
        <p>Silver</p>
        {productName && sizes.map(size => (
          <p>{`LWA-CS-${productName}-${signNumber}-${size}-SLVR`}</p>
        ))}
      </section>
  )
}

export default GardenSKU