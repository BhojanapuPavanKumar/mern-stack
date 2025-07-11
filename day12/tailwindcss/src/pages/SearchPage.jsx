import { useEffect, useState } from "react";
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { useSearchParams } from "react-router";
import { ProductCard } from "../components/ProductCard";

const SearchPage =()=>{
    const [products,setProducts]=useState([]);
      const [searchParams] = useSearchParams();
      const searchText=searchParams.get("text")
    //   console.log(window.location.search)
    const getSearchResults=async ()=>{
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchText}`)
        const data = await response.json()
        setProducts(data.products)
    }

    useEffect(()=>{
        getSearchResults();
    },[searchText]);

    return(
        <>
            <Navbar/>
                <main className="flex flex-wrap px-6 py-4 gap-10 justify-between">
                    {products.map((elem)=>(
                        // <ProductCard title={elem.title} thumbnail={elem.thumbnail}/>
                        <ProductCard {...elem} key={elem.id}/>
                    ))}
                </main>
            <Footer/>
        </>
    )
}


export {SearchPage}