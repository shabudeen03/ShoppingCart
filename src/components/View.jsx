import items from "../assets/model/model.js";
import { useParams, useNavigate, NavLink } from "react-router";
import { useEffect, useState } from "react";
import "../assets/stylesheets/view.css";

function Input({ stockLimit, setItemStateQty }) {
    const [state, setState] = useState(1);

    const handleChange = (e) => {
        if(e.target.value > 0) {
            setItemStateQty(e.target.value);
            setState(e.target.value);
        }
    }

    return (<>
        <input type="number" min={1} max={stockLimit} step="1" value={state} onChange={handleChange} />
    </>)
}

function SubItem({ id, name, price, path}) {
    return (
        <NavLink to={"/view/" + id}>
            <div className="other-item">
                <div className="desc">
                    <div className="name">{name}</div>
                    <div className="price">{price}</div>
                </div>
                <img src={path} />
            </div>
        </NavLink>
    )
}

function View({ addToCart }) {
    const navigate = useNavigate();
    const params = useParams();
    const targetId = params.itemId;
    let item = items.find((item) => item.oid === Number(targetId));

    useEffect(() => { 
        if(item === undefined) {
          navigate("/");
        }
    }, [targetId]);

    //if invalid url
    if(item === undefined) {
        return <h1>Loading ...</h1>;
    }

    let itemState = {
        itemId: item.oid,
        itemQty: 1    
    };

    const setItemStateQty = (val) => {
        // console.log(typeof val);
        itemState.itemQty = Number(val);
        // console.log(itemState.itemQty);
    }

    // Randomly select 5 other items to show
    const rndItems = [];
    for(let i=0; i<5; i++) {
        const rndValue = Math.random() * (items.length - 1);
        const rndIdx = Math.round(rndValue);
        if(rndItems.indexOf(items[rndIdx]) === -1) rndItems.push(items[rndIdx]);
        else i--;
    }

    const subItems = rndItems.map((item) => {
        return <SubItem 
            className="sub-item"
            key={crypto.randomUUID()}
            id={item.oid}
            name={item.name}
            price={item.price}
            path={item.src}
        />;
    })

    return (<>
      <h1>Item View</h1>
      <div className="view-main">
        <div className="view-img">
            <img src={item.src} />
        </div>

        <div className="view-item">
            <div className="title">{item.name}</div>
            <div className="stock">In Stock: {item.stock}</div>
            <div className="avgRating">Average Rating: {item.avgRating}</div>
            
            <hr />
            <div>
                <label>Quantity: </label>
                <Input stockLimit={item.stock} setItemStateQty={setItemStateQty} />
                <br />
                <NavLink to="/cart" state={itemState}>
                    <button onClick={() => addToCart(itemState)}>Add</button>    
                </NavLink>
            </div>

            <hr />
            <div className="description">
                <div className="title">Description:</div>
                <div>
                    <ul>
                        {item.description.map((desc) => {
                            return <li key={crypto.randomUUID()}>
                                    {desc}
                                </li>;
                        })}
                    </ul>
                </div>
            </div>
        </div>

        <div className="view-ratings">
            {item.ratings.length > 0 && <div className="title">Reviews:</div>}
            <div>
                <ul>
                    {item.ratings.map((rat) => {
                        return <li key={crypto.randomUUID()}>
                            <div>
                                <div className="title">{rat.reviewTitle}</div>
                                <div className="desc">{rat.reviewDescription}</div>
                                <div className="user">{rat.username}</div>
                                <div className="rat">Rating: {rat.rating} / 5</div>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </div>
      </div>

      <div className="view-other-items">
        {subItems}
      </div>
    </>);
  }

export default View;