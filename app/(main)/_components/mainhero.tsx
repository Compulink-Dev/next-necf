import { connectToDB } from '@/lib/connectToDB'
import Hero from '@/models/(home)/hero'
import React from 'react'
import ImageSlider from './imageSlider'

export async function loadHero() {
  await connectToDB()
  const heros = await Hero.find()
  return heros
}


async function MainHero() {

  const heros = await loadHero()

  console.log(heros);

  const hero = heros

  const slide = hero[0].image
  const slide2 = hero[1].image
  const slide3 = hero[2].image
  const slide4 = hero[3].image

  const images = [
    slide,
    slide2,
    slide3,
    slide4
  ];



  return (
    <div>

      {/* {
        heros.map((hero: any) => (
          <ImageSlider
            key={hero._id}
            images={hero.image}
          />
        ))
      } */}

      <ImageSlider
        images={images}
      />

    </div>
  )
}

export default MainHero