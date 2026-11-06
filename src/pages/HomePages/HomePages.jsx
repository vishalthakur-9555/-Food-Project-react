
import HeroSection from './HeroSection/HeroSection'
import DishesCards from './DishesCards/DishesCards'
import AboutUs from './AboutUs/AboutUs'
import BookTable from './BookTbale/BookTable'
import OurRestaurant from './OurRestaurant/OurRestaurant'
import Features from './Features/Features'

const HomePages = () => {
  return (
    <>
      <HeroSection/>
      <Features/>
      <DishesCards/>
      <AboutUs />
      <BookTable/>
      <OurRestaurant/>
    </>
  )
}

export default HomePages
