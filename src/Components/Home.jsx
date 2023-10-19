import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./Banner";

const Home = () => {

    const loadedData = useLoaderData();

    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <div>
            <Banner></Banner>

            <div className="  bg-[url('https://i.ibb.co/chPwXGb/cropped-1366-768-456498.jpg')]">
                <div className="flex justify-end -mt-10  mr-16 " data-aos="zoom-in">
                    <div className="grid grid-cols-1 gap-2 w-96 rounded-lg">
                        {
                            loadedData.map(data => <div key={data.id}>

                                <div className="card card-side bg-gradient-to-r from-sky-900 via-indigo-900 to-purple-900 gap-2 shadow-xl" data-aos="zoom-in-left" data-aos-duration="4000">
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
        </div>
    );
};

export default Home;