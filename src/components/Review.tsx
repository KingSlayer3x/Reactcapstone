import { Star } from "lucide-react"
export default function Review({name,image,review,rate}:
    {name:string,image:string,review:string,rate:number}) {
  return (
    <div className="shadow-2xl rounded-3xl ml-4 p-4">
        <div className="ml-8 p-2">
            <h1 className="font-markazi">{name}</h1>
        </div>
        <div className="flex justify-between items-center">
            <img src={image} className="w-24 rounded-full hover:scale-105" alt="face-image" />
            <p className="font-karla ml-2">{review}</p>
        </div>
        <div className="flex text-2xl p-2 ml-7 text-center items-center">
            {rate}
            <Star fill="gold" strokeWidth={0} />
        </div>
    </div>
  )
}
