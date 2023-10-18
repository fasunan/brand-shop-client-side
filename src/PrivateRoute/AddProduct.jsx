import Swal from 'sweetalert2'
const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;

        const allProducts = { name, photo, brandName, type, price, details, rating };
        console.log(allProducts);

        // send data to server
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(allProducts)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="p-24">
            <form onSubmit={handleAddProduct}>

                {/* form name and quantity row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-sky-500 mb-2">Name</h2>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-sky-500 mb-2">Photo URl</h2>
                        <input type="Photo" name="photo" placeholder="Photo URL" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-sky-500 mb-2">Band Name</h2>
                        {/* <input type="text" name="brandName" placeholder="Band Name" className="input input-bordered input-primary w-full max-w-xs" /> */}
                        <select className="select select-success w-full max-w-xs input" type="text" name="brandName" >
                            <option disabled selected>Brand Name</option>
                            <option>Apple</option>
                            <option>Samsung</option>
                            <option>Microsoft</option>
                            <option>Intel</option>
                            <option>Sony</option>
                            <option>Dell</option>
                        
                        </select>

                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-sky-500 mb-2">Brand Type</h2>
                        <input type="text" name="type" placeholder="Brand Type" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-sky-500 mb-2">Price</h2>
                        <input type="number" name="price" placeholder="Price" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-sky-500 mb-2">Details</h2>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-sky-500 mb-2">Rating</h2>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block mt-6" />
            </form>
        </div>
    );
};

export default AddProduct;