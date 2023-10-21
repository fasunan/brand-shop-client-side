import { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AddToCart = () => {
    const addProduct = useLoaderData();
    const [product, setProduct]=useState(addProduct);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then(result=>{
            if(result.isConfirmed){
                console.log('deleted')
                fetch(`https://assignment-10-server-2vs9nayzy-al-sunans-projects.vercel.app/details/${id}`, {
                        method: 'DELETE'
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remainingProducts = product.filter(products => products._id !== id);
                            setProduct(remainingProducts)
                        }
                    })
            }
        })


    }

    return (
        <div className="p-20">
            <h1 className="text-sky-500  text-4xl font-bold mb-14 mt-10 flex justify-center">Your Selected  Product on Cart<FaCartArrowDown></FaCartArrowDown></h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 rounded">

                {
                  product.map((cart, index) => <div key={index}>


                        <div className=" w-96  bg-indigo-100 shadow-xl rounded-lg">
                            <div className="card-body">

                                <figure><img className='shadow' src={cart.photo} /></figure>
                                <h2 className="card-title">{cart.name}</h2>
                                <div className="text-lg flex">
                                    <p className='flex'>Price: <BsCurrencyDollar className='mt-[6px]'></BsCurrencyDollar> {cart.price}</p>
                                    <p>Brand: {cart.brandName}</p>
                                </div>
                                <button onClick={()=>handleDelete(cart._id)} className="btn border-none bg-indigo-300 shadow-lg text-base text-red-700">Delete<MdAutoDelete></MdAutoDelete></button>
                            </div>
                        </div>


                    </div>)

                }

            </div>


        </div>
    );
};

export default AddToCart;