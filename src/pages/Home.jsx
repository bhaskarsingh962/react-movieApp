import { NavLink } from "react-router-dom";
import img from '../../public/movies.png'

const Home = () => {
  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col pt-36 ">
      <section className="container mx-auto px-6 py-8 ">
        <div className="grid md:grid-cols-2 gap-8  justify-evenly items-center pl-16">
          <div className="space-y-6">
            <p className="text-2xl uppercase tracking-wider text-yellow-400">
              Explore the Latest in Movie Industries
            </p>
            <h1 className="text-4xl font-bold md:text-6xl leading-tight">
              Unlimited Movies, TV Shows, & More.
            </h1>
            <p className="text-lg text-gray-300">
              Discover the top best movies and dramas with a catchy subtitle 
              like Your Ultimate Guide to Must-Watch Content.
            </p>
            <div className="pt-4">
              <NavLink 
                to="/movies" 
                className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300">
                Explore Now
              </NavLink>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src={img} 
              alt="movies poster" 
              className="w-[450px] h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Wave divider */}
            {/* <div className=" absolute bottom-40 inset-x-0  rotate-180"> */}
      <div className="relative top-40 ">
        <svg
          className="absolute rotate-180 inset-x-0 bottom-0"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="0.3"
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          />
          <path
            fill="#FFFFFF"
            fillOpacity="0.5"
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05C99.41,111.27,165,111,224.58,91.58C255.73,81.43,284.67,65.51,314.25,51.78C355.17,32.78,398.98,5.78,445.08,2.11C481.34-0.74,515.98,11.53,543.68,33.67C575.45,59.06,606,95.65,647.31,106.65C687.75,117.44,728.66,99.96,766.44,82.37C804.22,64.78,862.28,46.76,927.48,51C1014.01,44,1100.94,5.29,1177.28-33.81V0Z"
          />
        </svg>
      </div>
    </main>
  );
};

export default Home;
