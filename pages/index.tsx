import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import GardenSKU from '../components/GardenSKU'
import GeneralSKU from '../components/GeneralSKU'

const Home: NextPage = () => {
  const [text, setText] = useState("")
  const [carName, setCarName] = useState("")
  const [carNumber, setCarNumber] = useState("")
  
  const sizes = ["19.3", "27.2", "39", "54.3", "78"]

  function capitalizeWordsAndAddDashes(string: string) {
    const capitalized = string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    return capitalized.replace(/\s+/g, '-')
};
function capitalizeWords(string: string) {
  return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <input className='border border-black' type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <p className='font-bold'>photo başlık</p>
      <p>{capitalizeWords(text)}</p>
      <p className='font-bold'>foto isim</p>
      <p>{capitalizeWordsAndAddDashes(text).replace(/,/g, "")}</p>
      <p className='font-bold'>foto tagler</p>
      <p>{text.replace(/,/g, ";")}</p>
      <section>
        <h2>SKU automation</h2>
        <p>araba adı</p>
        <input className='border border-black' value={carName} onChange={(e) => setCarName(e.target.value)} type="text" />
        <p>araba sıra numarası</p>
        <input className='border border-black' value={carNumber} onChange={(e) => setCarNumber(e.target.value)} type="text" />
        <p>Black</p>
        {carName && sizes.map(size => (
          <p>{`LWA-CS-${carName}-${carNumber}-${size}-BLK`}</p>
        ))}
        <p>White</p>
        {carName && sizes.map(size => (
          <p>{`LWA-CS-${carName}-${carNumber}-${size}-WHT`}</p>
        ))}
      </section>
      <GardenSKU />
      <GeneralSKU />
    </div>
  )
}

export default Home
