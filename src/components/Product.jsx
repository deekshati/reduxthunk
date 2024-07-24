import React from 'react'
import { useEffect,useState } from 'react'
import { Card } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './store/cartSlice';
import { getProducts } from './store/productSlice';


/*In very first case redux was only able to handle synchronus function but now with reduxthunk/reduxmiddleware redux can aslo handle 
async calls of apis*/

const Product = () => {
  const dispatch=useDispatch();
  //const [products,getProducts]=useState([]);
  const {data:products}=useSelector((state)=>state.products);

  useEffect(()=>{
    //dispatch action for fetchProducts
    dispatch(getProducts());
  },[]);
  
  const addTocart=(product)=>{
    //dispatch an add action
    dispatch(add(product))

  }

  const cards = products.map(product=>(
    <div className="col-md-3" style={{marginBottom:"10px"}}>

   <Card key={product.id} className='h-100'>
    <div className="text-center">
      <Card.Img variant="top" src={product.image}  style={{width:"100px",height:"130px"}}/>
      </div>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
   
      </Card.Body>
      <Card.Footer style={{background:"black"}}>
      <Button variant="primary" onClick={()=>addTocart(product)}>Add to cart</Button>
      </Card.Footer>
    </Card>
      
    </div>
  ))

  return (
    <>
    
    <h1 style={{color:"blueviolet"}}>PRODUCT DASHBOARD</h1>
    <div className="row">
      {cards}

    </div>
    

    </>
  )
}

export default Product