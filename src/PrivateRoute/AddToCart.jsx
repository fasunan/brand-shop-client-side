import { BsCurrencyDollar } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const AddToCart = () => {
    const addProduct = useLoaderData();
    const handleDelete = () => {
    }

    return (
        <div className="p-20">
            <h1 className="text-sky-500  text-4xl font-bold mb-14 mt-10 flex justify-center">Your Selected  Product on Cart<FaCartArrowDown></FaCartArrowDown></h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 rounded">

                {
                  addProduct.map((cart, index) => <div key={index}>


                        <div className=" w-96  bg-indigo-100 shadow-xl rounded-lg">
                            <div className="card-body">

                                <figure><img className='shadow' src={cart.photo} /></figure>
                                <h2 className="card-title">{cart.name}</h2>
                                <div className="text-lg flex">
                                    <p className='flex'>Price: <BsCurrencyDollar className='mt-[6px]'></BsCurrencyDollar> {cart.price}</p>
                                    <p>Brand: {cart.brandName}</p>
                                </div>
                                <button onClick={handleDelete} className="btn bg-indigo-300 shadow-lg text-base text-red-700">Delete<MdAutoDelete></MdAutoDelete></button>
                            </div>
                        </div>


                    </div>)

                }

            </div>


        </div>
    );
};

export default AddToCart;