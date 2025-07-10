import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"

const ProfilePage=()=>{
    const [products,setProducts]=useState([]);
    const [editProductId,setEditProductId]=useState("");
    const [updateproduct,setUpdateProduct]=useState([{
         title: "",
        price: "",
        description: "",
        quantity: "",
    }])
    const getData = async ()=>{
        try{
            const resp=await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`,{
                method:"GET",
            })
            
            const result=await resp.json();
            console.log("result -->",result);
            setProducts(result.data.products)
        }catch(err){
            console.warn("error while getting products -->",err.message);
        }
    }

    useEffect(()=>{
            getData();
    },[]);

    const addData=async(title,price,description,quantity)=>{
         try{
             const resp=await fetch(`${import.meta.env.VITE_BACKEND_URL}/products`,{
                method:"POST",
                body:JSON.stringify({
                    title,
                    price,
                    description,
                    quantity,
                }),
                headers:{
                    "content-type": "application/json",
                },
            })
            if(resp.status=="201"){
                getData()
            }else{
                const result=await resp.json()
                alert(`Invalid data: ${result.message}`)
            }

            console.log(resp);
        }catch(err){
            console.warn("cannot create product -->",err.message);

        }
    }
    
    const updatedata=async(productId,title,price,description,quantity)=>{
         try{
             const resp=await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${productId}`,{
                method:"PATCH",
                body:JSON.stringify({
                    title,
                    price,
                    description,
                    quantity,
                }),
                headers:{
                    "content-type": "application/json",
                },
            })
             if (resp.status === 200 || resp.status === 201) {
                    getData();
                    setEditProductId(""); // reset edit mode
                } else {
                    const result = await resp.json();
                    alert(`Invalid data: ${result.message}`);
                }

            console.log(resp);
        }catch(err){
           console.warn("Failed to update product -->", err.message);
            alert("Something went wrong while update the product.");

        }
    }
     
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const title=e.target.Title.value;
        const price=e.target.Price.value;
        const description=e.target.Description.value;
        const quantity=e.target.Quantity.value;
        console.log(title,price,description,quantity)
        addData(title,price,description,quantity)
        // try{
        //      const resp=await fetch("http://localhost:2900/api/v1/products",{
        //         method:"POST",
        //         body:JSON.stringify({
        //             title,
        //             price,
        //             description,
        //             quantity,
        //         }),
        //         headers:{
        //             "content-type": "application/json",
        //         },
        //     })
        //     if(resp.status=="201"){
        //         getData()
        //     }else{
        //         const result=await resp.json()
        //         alert(`Invalid data: ${result.message}`)
        //     }

        //     console.log(resp);
        // }catch(err){
        //     console.warn("cannot create product -->",err.message);

        // }
    }

    const handlePostSubmit =async (e)=>{
        e.preventDefault();
        const title=e.target.Title.value;
        const price=e.target.Price.value;
        const description=e.target.Description.value;
        const quantity=e.target.Quantity.value;
        console.log(editProductId,title,price,description,quantity)
        updatedata(editProductId,title,price,description,quantity)

    }

    const handleDelete=async (productId)=>{
        try{
             const resp=await fetch(`${import.meta.env.VITE_BACKEND_URL}/products/${productId}`,{
                method:"DELETE",
                headers:{
                    "content-type": "application/json",
                },
            })
             if (resp.status === 200 || resp.status === 204) {
                alert(`Product deleted successfully`)
                    getData();
                    setEditProductId(""); // reset edit mode
                } else {
                     const result = await resp.json();
                    alert(`Failed to delete: ${result.message}`);
                }

            console.log(resp);
        }catch(err){
            console.warn("Failed to delete product -->", err.message);
            alert("Something went wrong while deleting the product.");

        }
    }
            
    return (
        <div >
            <Navbar/>
            <div >
                <form onSubmit={handleSubmit} className="mx-auto h-80 w-100 flex flex-col gap-5 p-6 m-4 bg-blue-200 max-w-150">
                    <div className="flex gap-4"> 
                    <label  className="border-1 py-1 px-2 rounded-md bg-blue-600">Title: </label>
                    <input type="text" name="Title" placeholder="title" className="b-1 py-1 px-2 rounded-md bg-blue-400"/>

                    </div>
                    <div className="flex gap-4">
                    <label  className="border-1 py-1 px-2 rounded-md bg-blue-600">Price: </label>
                    <input type="number" name="Price" placeholder="price" className="b-1 py-1 px-2 rounded-md bg-blue-400"/>

                    </div>
                    <div className="flex gap-4">

                    <label className="border-1 py-1 px-2 rounded-md bg-blue-600">Description: </label>
                    <input type="text" placeholder="description" name="Description" className="b-1 py-1 px-2 rounded-md bg-blue-400"/>
                    </div>

                    <div className="flex gap-4">

                    <label className="border-1 py-1 px-2 rounded-md bg-blue-600">Quantity: </label>
                    <input type="text" placeholder="quantity" name="Quantity" className="b-1 py-1 px-2 rounded-md bg-blue-400"/>
                    </div>
                    <button className="border-1 py-1 bg-blue-600">Add Product</button>
                </form>
            </div>
            <div className="mx-auto flex flex-wrap gap-6 justify-center ">
                {products.map((elem)=>{
                    return (
                        <div key={elem._id} className="border-2 rounded-md p-4">
                            {
                                elem._id===editProductId ?
                                (
                                    <form onSubmit={handlePostSubmit} className="mx-auto  flex flex-col gap-5 p-6 m-4 bg-blue-200 max-w-150">
                                        <div className="flex gap-4"> 
                                        <label  className="border-1 py-1 px-2 rounded-md bg-blue-600">Title: </label>
                                        <input type="text"value={updateproduct.title}   name="Title" placeholder="title" className="b-1 py-1 px-2 rounded-md bg-blue-400" onChange={(e) => setUpdateProduct({ ...updateproduct, title: e.target.value })}/>

                                        </div>
                                        <div className="flex gap-4">
                                        <label  className="border-1 py-1 px-2 rounded-md bg-blue-600">Price: </label>
                                        <input type="number" value={updateproduct.price} name="Price" placeholder="price" className="b-1 py-1 px-2 rounded-md bg-blue-400" onChange={(e) => setUpdateProduct({ ...updateproduct, price: e.target.value })}/>

                                        </div>
                                        <div className="flex gap-4">

                                        <label className="border-1 py-1 px-2 rounded-md bg-blue-600">Description: </label>
                                        <input type="text"  value={updateproduct.description} placeholder="description" name="Description" className="b-1 py-1 px-2 rounded-md bg-blue-400" onChange={(e) => setUpdateProduct({ ...updateproduct, description: e.target.value })}/>
                                        </div>

                                        <div className="flex gap-4">

                                        <label className="border-1 py-1 px-2 rounded-md bg-blue-600">Quantity: </label>
                                        <input type="text" value={updateproduct.quantity} placeholder="quantity" name="Quantity" className="b-1 py-1 px-2 rounded-md bg-blue-400" onChange={(e) => setUpdateProduct({ ...updateproduct, quantity: e.target.value })} />
                                        </div>
                                        <button className="border-1 py-1 bg-blue-600">Update</button>
                                        <button  className="border-1 py-1 bg-blue-600" onClick={()=>{
                                            setEditProductId("");
                                           
                                        }}>Cancel</button>
                                    </form>
                                ):(
                                    <div>
                                    <p>{elem.title}</p>
                                    <p>{elem.price}</p>
                                    <p>{elem.description}</p>
                                    </div>
                                )
                            }

                            <button onClick={()=>{
                               setEditProductId(elem._id)
                               setUpdateProduct({
                                                title: elem.title,
                                                price: elem.price,
                                                description: elem.description,
                                                quantity: elem.quantity,
                                            });
                            }
                               } className="border-2 py-1 px-2 bg-blue-600">Edit</button>

                               <button onClick={()=>{
                               handleDelete(elem._id);
                            }
                               } className="border-2 py-1 px-2 bg-red-500">Delete</button>
                        </div>
                    )
                })}
                
            </div>
        </div>
    )
}

export{ProfilePage}