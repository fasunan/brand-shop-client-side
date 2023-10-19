import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const SeeDetails = useLoaderData();
    const { name, photo, brandName, type, price, details, rating } = SeeDetails;
    return (
        <div className="flex justify-center items-center p-32">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                   <figure><img src={photo} /></figure> 
                   <div className=""> 
                    <p>Price: {price}</p>
                    <p>Brand: {brandName}</p>
                    <p> Category: {type}</p>
                    <p>Ratting :{rating}</p>
                   </div>
                   <p>Description: {details}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;