import styles from "./style"

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from "./components"


const App = () =>  (
  <div className='bg-emerald-50 w-full grid '>
    <div className={` `}>
      <div className={``}>
       
        <Navbar />
      </div>
    </div>

    <div className={`bg-emerald-50  `}>
      <div className={``}>
        <Hero />
        
      </div>

    </div>

    <div className={`bg-emerald-50  `}>
      <div className={`${styles.boxWidth} `}>
      <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>

    </div>

  </div>
)


export default App