
export default function About() {
  return (
    <div className="bg-green-900 p-5 mt-10">
        <div className="grid md:grid-cols-2 ml-7 md:ml-45">
            <div className="">
                <h1 className="text-[#F4CE14] text-[64px] w-3xl font-markazi">Little Lemon</h1>
                <h3 className="text-[#EDEFEE] text-4xl font-markazi mb-3">Chicago</h3>
                <p className="text-[#EDEFEE] text-2xl w-md font-karla">we are a family owned Mediterranean restaurant,
                    focused on traditional recipes served
                    with a modern twist. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Magni excepturi sunt, ipsum tempore fugit
                    veritatis tenetur accusamus voluptatem id consequuntur quae a
                    animi hic reprehenderit officia ab, atque praesentium laboriosam.
                </p>
            </div>
            <div className="w-100 relative">
                <img src="./restaurant.jpg" className="w-100 absolute left-1/3 rounded-4xl shadow-2xl" alt="restaurant image" />
                <img src="./restaurant-chef-B2.jpg" className="w-90 absolute top-50 m-2 rounded-4xl shadow-2xl" alt="chef image" />

            </div>

        </div>
    </div>
  )
}
