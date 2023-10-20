
const Banner = () => {
    return (
        <div className="relative h-[400px]">
            <img className="h-96 w-[1350px]"  src="https://i.ibb.co/f2H7zYC/1318816.jpg" alt="" />
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-center mt-20 ml-10">
                <h1 className="text-4xl font-bold">Welcome To <span className="text-purple-400">TECH-LAND</span></h1>
                <h3 className="text-xl">A Big Brand Shop In the World</h3>
                <h3 className="text-xl">Here You Can Find Your Desire Product</h3>
                <h2 className="text-red-500 font-bold text-xl">LETS EXPLORE</h2>
                
            </div>
        </div>
    );
};

export default Banner;