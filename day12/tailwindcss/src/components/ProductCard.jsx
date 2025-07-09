
const ProductCard = (props)=>{
    const {title,price,thumbnail,description}=props
    return(
        <div className="bg-emerald-100 rounded-lg max-w-100">
            <p>{title}</p>
            <img src={thumbnail} className="bg-emerald-600 px-4 py-3"/>
            <p className="px-4 py-3">Rs. {price * 85}</p>
            <p className="px-4 py-3">{description}</p>
        </div>
    )
}


export{ProductCard}