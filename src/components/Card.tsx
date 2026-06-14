
export default function Card({ title,price, description, imageUrl }:
     {title: string, description: string, imageUrl: string, price: string}) {
return (
    <div className="m-12">
        <div className="flex flex-col">
            <img src={imageUrl} className="w-70 h-55 rounded-2xl" alt={title} />
            <div className="mt-5">
                <div className="flex flex-col">
                    <div className="flex">
                        <h2 className="font-karla text-2xl">{title}</h2>
                        <p className="text-[#EE9972] ml-auto mr-2.5 font-bold text-3xl font-markazi">{price}</p>
                    </div>
                    <div className="flex mt-5 w-55">
                        <p className="font-karla">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}