import { BsCart4, BsCurrencyDollar, BsStar } from 'react-icons/bs';
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';


const ProductDetails = () => {
    const SeeDetails = useLoaderData();
    const { name, photo, brandName, type, price, details, rating, _id } = SeeDetails;

    const handleAddToCart = () => {
        const addCart = { name, photo, brandName, type, price, details, rating, _id };
        fetch(`https://assignment-10-server-2vs9nayzy-al-sunans-projects.vercel.app/details`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addCart)
        })
            .then(res => res.json())
            .then(data => {
               
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }

    return (
        <div className='p-32'>
            <h2 className='text-4xl font-semibold text-center text-rose-700 bg-white shadow-lg mb-10 p-2'>Details of Your Desire Product</h2>
            <div className="flex justify-center items-center ">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <figure><img className='shadow' src={photo} /></figure>
                        <div className="text-lg flex">
                            <p className='flex'>Price: <BsCurrencyDollar className='mt-[6px]'></BsCurrencyDollar> {price}</p>
                            <Link><button onClick={handleAddToCart} className="btn shadow-lg"><BsCart4 className='text-cyan-500'></BsCart4>Add To Cart</button></Link>
                            
                        </div>
                        <div className='flex'>
                            <p>Brand: {brandName}</p>
                            <p> Category: {type}</p>
                        </div>
                        <p className='flex'>Ratting : {rating}  <BsStar className='mt-[3px] ml-2 text-yellow-600'></BsStar></p>
                        <p>Description: {details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;