

const Update = () => {

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const details = form.details.value;
        const rating = form.rating.value;

        const updateProduct = { name, photo, brandName, type, price, details, rating };
        console.log(updateProduct);
    }
    return (
        <div className="p-24">

            <h1 className="text-red-400 text-center text-4xl font-bold mb-14">Update Your Product</h1>

            <form onSubmit={handleUpdate}>

                
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
                       
                        <select className="select select-success w-full max-w-xs input" type="text" name="brandName" >
                            <option value="brandName" disabled selected>Brand Name</option>
                            <option>apple</option>
                            <option>samsung</option>
                            <option>microsoft</option>
                            <option>intel</option>
                            <option>sony</option>
                            <option>dell</option>

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
                <input type="submit" value="Update Product" className="btn btn-block mt-6" />
            </form>
        </div>
    );
};

export default Update;