import PRODUCTS from '../../assets/PRODUCTS.json'

const Products = () => {
  let products = PRODUCTS;
  const onClickHandler = (product)=>{
    console.log(product);
    
  }
  return (
    <div>
      <ul>
    {products.map(product=>
     <li key={product.productId} onClick={()=>onClickHandler(product)}>{product.productName}{product.brand} </li>
    )}
     </ul>
      <button onClick={onClickHandler}>Click</button>
    </div>
  )
}

export default Products