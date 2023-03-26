import logo from './logo.svg';
import './App.css';

function App() {
 const products = [
    {name:'hp', price:30000},{name:'lenevo',price:50000},
    {name:'delda',price:80000},
    {name:'computer',price:20000},
    {name:'monitor',price:25000},
    {name:'samsung',price:35000},
    {name:'oppo',price:40000},
    {name:'omaga',price:65000},
    {name:'linux',price:60000}
 ]
  return (
    <div className="App">
      {
        products.map(seller=><Product name={seller.name} price={seller.price} ></Product>)
      }
      {/* <Product name ='borta' price='34'></Product>
      <Product name ='borta' price='34'></Product>
      <Product name ='borta' price='34'></Product>
      <Product name ='borta' price='34'></Product> */}
    </div>
  );
}
function Product(props){
   return(
      <div className='product'>
          <h1>Name: {props.name}</h1> 
          <h1>Price: {props.price}</h1> 
      </div>
   )
}

export default App;
