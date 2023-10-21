import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from "react";
import { CiDark } from 'react-icons/ci';

import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";
import WhatsNew from "./WhatsNew";

const Home = () => {
    const [theme, setTheme] = useState("light");

    const loadedData = useLoaderData();


    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleChangeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");

    };




    useEffect(() => {
        Aos.init();
    }, []);
    return (

        <div className="dark:bg-black">
            <Banner></Banner>
            <div className="-mt-14 absolute ml-8">
                <button onClick={handleChangeTheme} className="btn btn-sm border-none rounded-3xl bg-transparent text-purple-400">
                    Mode <CiDark className="text-lg"></CiDark>
                </button>
            </div>
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-56 mt-10 mb-5  mr-16 ">

                    <div>
                        <div>
                            <div className=" p-10 ">
                                <WhatsNew></WhatsNew>
                            </div>
                        </div>

                    </div>
                    <div className="grid grid-cols-1 gap-2 w-96 rounded-lg ml-10 " data-aos="zoom-in">
                        <h2 className="text-3xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900">Explore Our Trusted Brand</h2>
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

            <div data-aos="zoom-in"  data-aos-duration="3000" className="">
            <div className="text-center shadow-2xl mt-16" >
            <h2 className="text-5xl  mb-4 font-bold text-purple-800">Why Choose Us!</h2>
            <p className="text-xl text-red-500">When You’re Looking To Shop for you and Your Home…<br />
                You Need A shop You Can Depend On! <br />
                And This is the Shop where we serve.......
                </p>
                
            </div>
            <div className=" flex justify-center p-5 mt-4 mb-4" >
                <img src="https://i.ibb.co/59H15Nj/whychoose-wideweb.png" alt="" />

            </div>
            </div>
        </div>
    );
};

export default Home;
