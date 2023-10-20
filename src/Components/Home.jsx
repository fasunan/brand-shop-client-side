import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";
import WhatsNew from "./WhatsNew";

const Home = () => {
    const [theme, setTheme] = useState("light");
    // console.log(theme)
    const loadedData = useLoaderData();

    const changeTheme = () => {

        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);
    const themeClass = theme === "light" ? "light-theme" : "dark-theme";

    useEffect(() => {
        Aos.init();
    }, []);
    return (
        // <div>
        <div className={`home-page ${themeClass}`}>
            <Banner></Banner>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-56 mt-10 mb-5  mr-16 ">

                    <div>
                        <div>
                            <div className=" p-10 ">
                                <WhatsNew></WhatsNew>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 gap-2 w-96 rounded-lg " data-aos="zoom-in">
                        <h2 className="text-3xl mb-6 font-bold">Explore Our Trusted Brand</h2>
                        {loadedData &&
                            loadedData?.map((data, index) => <div key={index}>

                                <div className=" card  card-side bg-gradient-to-r p-2 from-sky-900 via-indigo-900 to-purple-900 gap-2 shadow-2xl " data-aos="zoom-in-left" data-aos-duration="4000">
                                    <figure><img className="w-[200px] h-[150]" src={data.image} alt="Movie" /></figure>
                                    <Link to={`/${data.name}`}>
                                        <div className="card-body">
                                            <h2 className="card-title text-2xl font-bold text-sky-200">{data.name} <AiOutlineArrowRight></AiOutlineArrowRight></h2>
                                        </div>
                                    </Link>
                                </div>

                            </div>)
                        }
                    </div>
                </div>
            </div>
            <div>
                <button onClick={changeTheme} className="p-2 m-2 rounded-md bg-purple-500 text-white">
                    Change Theme
                </button>
            </div>
            <h2 className="text-3xl text-center shadow-2xl mb-4 font-bold text-purple-800">Why Choose Us</h2>
            <div className=" flex justify-center p-5 shadow-xl mt-4 mb-4" >
                <img src="https://i.ibb.co/59H15Nj/whychoose-wideweb.png" alt="" />

            </div>
        </div>
    );
};

export default Home;