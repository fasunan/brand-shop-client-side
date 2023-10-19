import { Link, useLoaderData } from "react-router-dom";


const AllProducts = () => {
    const loadedProducts = useLoaderData();
    
    
    return (
        <div>
            <div>
            <div className="carousel h-96 mt-20">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/znMPBVR/add-slider-1.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/NtzHFkb/add-slider-1.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Dp0XJdJ/add-slider-2.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/WV0BjTL/Screenshot-1.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 p-40 gap-6">
           

            {
                loadedProducts.map(brand => <div key={brand.id} className="flex justify-center">
                    <div className="card w-96 bg-indigo-200 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={brand.photo} alt="" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{brand.name}</h2>
                            <h3>Brand: {brand.brandName}</h3>
                            <p>Price ${brand.price}</p>
                            <p>Rating: {brand.rating}</p>
                            <div className="card-actions ">
                            <Link to={`/details/${brand._id}`}>
                                <button className="btn btn-primary w-full ">See details</button>
                                </Link>
                                {/* <button className="btn btn-primary w-full ">See Details</button> */}
                                <Link to={`/update/${brand._id}`}>
                                <button className="btn btn-primary w-full ">Update</button>
                                </Link>
                                
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
        </div>
    );
};

export default AllProducts;