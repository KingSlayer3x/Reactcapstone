export default function Hero(){
    return (
        <section className="bg-[#495E57] w-full h">
            <div className="flex flex-col md:flex-row justify-around items-center flex-wrap">
                <div className="w-80">
                    <div className="flex flex-col justify-between">
                        <h1 className="text-[#F4CE14] text-[64px] w-3xl font-markazi">Little Lemon</h1>
                        <h3 className="text-[#EDEFEE] text-4xl font-markazi mb-3">Chicago</h3>
                        <p className="text-[#EDEFEE] text-2xl w-md font-karla">we are a family owned Mediterranean restaurant,
                            focused on traditional recipes served
                            with a modern twist.
                        </p>
                        <button className="w-52 p-4 mt-15 cursor-pointer hover:bg-amber-400 transition-colors rounded-2xl bg-[#F4CE14]">
                            <h2 className="text-2xl font-karla">Reserve a Table</h2>
                        </button>
                    </div>
                </div>
                <div className="w-100">
                    <img src="./restauranfood.jpg" className="mt-10 hidden md:block rounded-4xl max-w-full h-auto" alt="food-image" />
                </div>
            </div>
        </section>
    )
}