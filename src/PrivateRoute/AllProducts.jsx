import { Link, useLoaderData } from "react-router-dom";


const AllProducts = () => {
    const loadedProducts = useLoaderData();
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 p-40 gap-6">
            {/* kichu style add korte hobe */}

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
                                <button className="btn btn-primary w-full ">See Details</button>
                                <Link to={'/update'}>
                                <button className="btn btn-primary w-full ">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default AllProducts;