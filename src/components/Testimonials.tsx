import Review from './Review'
import { reviews } from '../utils/reviews'
export default function Testimonials() {
  return (
        <div className='w-5xl mx-auto'>
            <div className='font-markazi text-6xl text-center'>Testimonials</div>
            <div className=' grid sm:grid-cols-2 md:grid-cols-4'>
            { reviews.map((item,index) => (
                <Review key={item.name}
                    name={item.name}
                    image={item.image}
                    review={item.review}
                    rate={item.rate}
                />
            ))}
            </div>
        </div>
  )
}
