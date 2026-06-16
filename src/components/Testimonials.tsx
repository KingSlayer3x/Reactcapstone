import Review from './Review'
import { reviews } from '../utils/reviews'
export default function Testimonials() {
  return (
        <div className='p-17'>
            <div className='font-markazi text-6xl text-center mb-15 text-[#495E57] text-shadow-lg'>Testimonials</div>
            <div className='grid grid-cols-1 gap-y-5 md:grid-cols-2 lg:grid-cols-4 mx-auto w-max'>
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
