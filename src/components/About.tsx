
export default function About() {
  return (
    <div className="bg-green-900 ">
        <div className="grid md:grid-cols-2 items-center m-5">
            <div className="ml-20 flex flex-col">
                <h1 className="text-[#F4CE14] text-[64px] font-markazi">Little Lemon</h1>
                <h3 className="text-[#EDEFEE] text-4xl font-markazi mb-3">Chicago</h3>
                <p className="text-[#EDEFEE] text-2xl w-md font-karla">we are a family owned Mediterranean restaurant,
                    focused on traditional recipes served
                    with a modern twist. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Magni excepturi sunt, ipsum tempore fugit
                    veritatis tenetur accusamus voluptatem id consequuntur quae a
                    animi hic reprehenderit officia ab, atque praesentium laboriosam.
                </p>
            </div>
            <div className="w-auto ">
                <img src="./restaurant.jpg" className="w-100 rounded-4xl shadow-2xl" alt="restaurant image" />
                <img src="./restaurant-chef-B2.jpg" className="w-90 m-2 rounded-4xl shadow-2xl" alt="chef image" />
            </div>
        </div>
    </div>
  ) 
}
