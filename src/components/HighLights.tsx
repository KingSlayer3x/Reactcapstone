import Card from "./card";
import { card } from "../utils/carddata";

export default function HighLights(){
    return (
        <main className="">
            <div className="flex flex-wrap pt-25 justify-around mb-20 items-center">
                <h1 className="font-markazi text-6xl">This Week Specials!</h1>
                <button className="w-52 p-4 cursor-pointer hover:bg-amber-400 transition-colors rounded-2xl bg-[#F4CE14]">
                    <h2 className="text-2xl font-karla">Online Menu</h2>
                </button>
            </div>
            <div className=" w-max mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                    {   card.map((item) => (
                        <Card
                            key={item.title}
                            title={item.title}
                            description={item.desc}
                            imageUrl={item.image}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </main>
    )
}