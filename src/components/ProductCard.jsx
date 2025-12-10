export default function ProductCard(props){

    return(
        <div>
             <h1>{props.name}</h1>
             <p>Price:{props.price}</p>
             <img src = {props.image}/>      
         </div>
       
    )
}