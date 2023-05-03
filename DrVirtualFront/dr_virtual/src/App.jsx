import styles from "./style"

import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, CTA, Footer} from "./components"
import Hero2 from "./components/Hero2"


const App = () =>  (
  <div className='bg-emerald-50 w-full grid '>
    <div className={` `}>
      <div className={``}>
       
        <Navbar />
      </div>
    </div>

    <div className={`bg-emerald-50 pb-96 h-full`}>
      <div className={``}>
        <Hero2 />
        
      </div>

    </div>
    <div className={`bg-emerald-50  h-[600]`}>
      <div className={``}>
        
        
      </div>

    </div>

    
      

    

  </div>
)


export default App