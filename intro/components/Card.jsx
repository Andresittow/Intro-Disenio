export default function Card() {
  return (
    <div className="bg-white w-80 rounded-2xl overflow-hidden 
                shadow-xl hover:shadow-2xl 
                transition-shadow duration-300 
                border border-red-300">


      <img
        src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
        alt="Landscape"
        className="w-full h-40 object-cover"
      />

      <div className="p-5 flex flex-col gap-3">
        <h2 className="text-xl font-bold text-gray-800">
          Red Heaven
        </h2>

        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla!
        </p>

        <div className="flex gap-2 mt-2">
          <span className="bg-red-400 text-white text-xs px-3 py-1 rounded-full">
            #tailwind
          </span>
          <span className="bg-red-400 text-white text-xs px-3 py-1 rounded-full">
            #frontend
          </span>
        </div>
      </div>
    </div>
  );
}
