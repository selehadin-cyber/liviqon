import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

const Home: NextPage = () => {
  const [text, setText] = useState("")
  const [textWithComma, setTextWithComma] = useState("")

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
    </div>
  )
}

export default Home
