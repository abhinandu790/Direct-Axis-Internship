import React from 'react'
import Sampleimage from './image/OIP.jpg';
import image2 from './image/OIP (3).jpg';
import image3 from './image/OIP1.jpg';

function CardComponent() {
  return (
    <div>
      <div class="card" style={{width: "18rem"}}>
      {/* <img src="https://www.bing.com/th/id/OIP.GjuMuHQalhy3yGh_HOPYqwHaGg?w=212&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.3&pid=3.1&rm=2" class="card-img-top" alt="..."/> */}
             <img src={Sampleimage} class="card-img-top" alt="..."/>
 
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:'center', textDecoration:"underline", marginBottom:"20px" ,color:"red", letterSpacing:"10px"}}>Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
<img src={image3} alt="" />
<img src={image2} alt="" />
    </div>
  )
}

export default CardComponent
