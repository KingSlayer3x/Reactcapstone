
export default function Card({ title,price, description, imageUrl }:
     {title: string, description: string, imageUrl: string, price: string}) {
return (
    <div className="mx-12 mb-25 pb-8 w-70 bg-gray-200 rounded-2xl shadow-2xl">
        <div className="flex flex-col">
            <img src={imageUrl} className="w-70 h-55 rounded-2xl" alt={title} />
            <div className="mt-5">
                <div className="flex flex-col ml-4">
                    <div className="flex">
                        <h2 className="font-karla text-2xl">{title}</h2>
                        <p className="text-[#EE9972] ml-auto mr-2.5 font-bold text-3xl font-markazi">{price}</p>
                    </div>
                    <div className="flex mt-3 pb-5 w-55">
                        <p className="font-karla">{description}</p>
                    </div>
                    <button className="w-40 p-1 cursor-pointer hover:bg-amber-400 transition-colors rounded-2xl bg-[#F4CE14]">
                        <h2 className="text- font-karla">Ask for a delivery</h2>
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
)
}