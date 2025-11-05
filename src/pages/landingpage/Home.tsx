import { Button } from '../../components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-2">
          <h1 className="scroll-m-50 text-center text-6xl font-extrabold tracking-tight text-balance font-logo text-[#69247C]">
            Financial Tracker
          </h1>

          <h5 className='font-logo font-light text-[#DA498D]'>
            Monitor and track your expenses daily!
          </h5>

        
        <div className="mt-5">
          <Link to='/login'>
            <Button className='bg-[#DA498D] hover:bg-[#DA498D]/90 cursor-pointer'>Get Started</Button>
          </Link>
        </div>
        
      </div>
    </>
  )
}

export default Home
