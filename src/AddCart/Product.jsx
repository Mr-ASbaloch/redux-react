import React from 'react'
import products from './products.json'


const Product = () => {
  return (
<>  
<div   style={{display:'flex ',flexWrap:'wrap' ,gap:'5px'}} > 
    {
        products.map(product =>{
return   <div className='child-div' style={{width:'250px', alignItems:'center'}}> 
<h3>{product.name}</h3> 

<img src={product.image} alt="img" />
<p>{product.description}</p>
<button style={{display:'block', backgroundColor:'greenyellow'}}> price : {product.price}</button>

</div>
        })
    }
</div>

</>

  )


}
export default Product