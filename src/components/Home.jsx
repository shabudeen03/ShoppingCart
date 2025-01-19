import { NavLink } from "react-router";
import "../assets/stylesheets/home.css";
import items from "../assets/model/model.js";

function Card({name, stock, price, avgRating, id, path}) {

    // import pic from path;
    return (<NavLink to={"view/" + id} style={{ textDecoration: 'none' }}>
        <div className="home-card">            
            <div className="home-card-img">
                <div className="img-wrapper">
                    <img src={path} />
                </div>
            </div>

            <div className="home-card-details">
                <div className="home-card-name">{name}</div>
                <div className="home-card-rating">{avgRating}</div>
                <div className="home-card-stockprice">
                    <div>Stock: {stock}</div>
                    <div>Price: $ {price}</div>
                </div>
            </div>
        </div>
    </NavLink>);
}
  
function Home() {
    let itemList = [];
    for(let i=0; i < items.length; i++) { //change 30 to items.length
        const item = items[i]; //to change to i
        // console.log(item);
        itemList.push(
            <Card
                key={item.oid}
                name={item.name}
                stock={item.stock}
                price={item.price}
                avgRating={item.avgRating}
                path={item.src}
                id={item.oid}
            />
        );
    }

    return (<>
      <h1>Home</h1>
      <div className="home-grid">
        {itemList}
      </div>
    </>);
}

export default Home;