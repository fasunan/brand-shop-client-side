
const AddToCart = () => {
    return (
        <div className="p-20">
            <h1 className="text-sky-500 text-center text-4xl font-bold mb-14 mt-10">Your Selected  Product on Cart</h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                       
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>                          
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>Price: </div>
                                </td>                              
                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>
                        </tbody>                      
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;