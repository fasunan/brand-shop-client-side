import { useLoaderData } from "react-router-dom";


const AllProducts = () => {
    const loadedProducts= useLoaderData();
    console.log(loadedProducts)
    return (
        <div >
            <h2 className="p-20 text-white"> products: {loadedProducts.length}</h2>
            {/* {
                loadedProducts.map(dataName=><div key={}> {}</div>)
            } */}
        </div>
    );
};

export default AllProducts;