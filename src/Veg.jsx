import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./cartSlice";
import { toast } from "react-toastify";
import "./Veg.css";

function Veg() {
  const dispatch = useDispatch();

  const Vegitems = [
    { id:1, name:"Tandoori Paneer", price:297, oldPrice:512, rating:3.9, imageurl:'/Images/veg_items/Paneer.jpg', description:"Rich paneer taste" },
    { id:2, name:"Ghee Dosa", price:78, oldPrice:116, rating:5.0, imageurl:'/Images/veg_items/Dosa.jpg', description:"Crispy dosa" },
    { id:3, name:"Veg Curry", price:229, oldPrice:363, rating:4.1, imageurl:'/Images/veg_items/Veg Curry.jpg', description:"Tasty curry" },
    { id:4, name:"Veg Biryani", price:180, oldPrice:250, rating:4.2, imageurl:'/Images/veg_items/Biryani.jpg', description:"Spicy biryani" },
    { id:5, name:"Fried Rice", price:150, oldPrice:210, rating:4.0, imageurl:'/Images/veg_items/Fried Rice.jpg', description:"Delicious rice" },
    { id:6, name:"Veg Noodles", price:140, oldPrice:200, rating:3.8, imageurl:'/Images/veg_items/Noodles.jpg', description:"Chinese style" },
    { id:7, name:"Idli", price:50, oldPrice:80, rating:5.0, imageurl:'/Images/veg_items/Idly.jpg', description:"Soft idli" },
    { id:8, name:"Poori", price:70, oldPrice:100, rating:4.1, imageurl:'/Images/veg_items/Puri.jpg', description:"Hot poori" },
    { id:9, name:"Chapati", price:60, oldPrice:90, rating:4.0, imageurl:'/Images/veg_items/Chapathi.jpg', description:"Healthy chapati" },
    { id:10, name:"Veg Pulao", price:160, oldPrice:220, rating:4.2, imageurl:'/Images/veg_items/Pulao.jpg', description:"Aromatic pulao" },
    { id:11, name:"Meals", price:200, oldPrice:280, rating:4.5, imageurl:'/Images/veg_items/Meals.jpg', description:"Complete meal" },
    { id:12, name:"Samosa", price:30, oldPrice:50, rating:5.0, imageurl:'/Images/veg_items/Samosa.jpg', description:"Crispy snack" },
    { id:13, name:"Medu Vada", price:40, oldPrice:70, rating:4.3, imageurl:'/Images/veg_items/Vada.jpg', description:"Crunchy vada" },
    { id:14, name:"Upma", price:60, oldPrice:90, rating:3.9, imageurl:'/Images/veg_items/Upma.jpg', description:"Light breakfast" },
    { id:15, name:"Pongal", price:80, oldPrice:120, rating:5.0, imageurl:'/Images/veg_items/Pongal.jpg', description:"Traditional dish" },
    { id:16, name:"Pakoda", price:90, oldPrice:140, rating:4.1, imageurl:'/Images/veg_items/Pakoda.jpg', description:"Evening snack" },
    { id:17, name:"Mushroom Curry", price:190, oldPrice:260, rating:5.0, imageurl:'/Images/veg_items/Mushroom.jpg', description:"Mushroom special" },
    { id:18, name:"Potato Curry", price:120, oldPrice:180, rating:3.8, imageurl:'/Images/veg_items/Potato_curry.jpg', description:"Potato curry" },
    { id:19, name:"Gobi Manchurian", price:170, oldPrice:240, rating:4.3, imageurl:'/Images/veg_items/Gobifry.jpg', description:"Crispy gobi" },
    { id:20, name:"Veg Roll", price:110, oldPrice:160, rating:4.0, imageurl:'/Images/veg_items/Veg_Roll.jpg', description:"Tasty roll" },
    { id:21, name:"Butter Naan", price:60, oldPrice:90, rating:4.2, imageurl:'/Images/veg_items/Butter_Naan.jpg', description:"Soft butter naan" },
    { id:22, name:"Rajma", price:140, oldPrice:200, rating:4.3, imageurl:'/Images/veg_items/Rajma.jpg', description:"Kidney beans curry" },
    { id:23, name:"Veg Pizza", price:250, oldPrice:350, rating:5.0, imageurl:'/Images/veg_items/Veg_pizza.jpg', description:"Cheesy pizza" },
    { id:24, name:"Veg Burger", price:120, oldPrice:180, rating:4.1, imageurl:'/Images/veg_items/Burger.jpg', description:"Tasty burger" },
    { id:25, name:"Sandwich", price:100, oldPrice:150, rating:4.0, imageurl:'/Images/veg_items/Sandwich.jpg', description:"Grilled sandwich" },
    { id:26, name:"Pasta", price:180, oldPrice:250, rating:5.0, imageurl:'/Images/veg_items/Pasta.jpg', description:"Italian pasta" }
  ];

  const [search, setSearch] = useState(""), [maxPrice, setMaxPrice] = useState(""), [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const renderStars = r => "★".repeat(Math.floor(r)) + "☆".repeat(5 - Math.floor(r));

  const filteredItems = Vegitems.filter(i => {
    const s = i.name.toLowerCase().includes(search.toLowerCase());
    const p = maxPrice ? (
      maxPrice==="50" ? i.price<=50 :
      maxPrice==="100" ? i.price<=100 :
      maxPrice==="200" ? i.price<=200 :
      maxPrice==="300" ? i.price<=300 :
      maxPrice==="400" ? i.price<=400 :
      maxPrice==="500" ? i.price<=500 : true
    ) : true;
    return s && p;
  });

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const currentItems = filteredItems.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage);

  return (
    <>
      <h1 className="page-title">🥗 <u>Fresh & Healthy Veg Specials</u> 🥗</h1>

      <div className="filter-box">
        <input type="text" placeholder="Search food item..." value={search} onChange={e=>{setSearch(e.target.value);setCurrentPage(1);}} className="search-input"/>
        <select value={maxPrice} onChange={e=>{setMaxPrice(e.target.value);setCurrentPage(1);}} className="price-filter">
          <option value="">All Prices</option>
          <option value="50">₹10 - ₹50</option>
          <option value="100">₹51 - ₹100</option>
          <option value="200">₹101 - ₹200</option>
          <option value="300">₹201 - ₹300</option>
          <option value="400">₹301 - ₹400</option>
          <option value="500">₹401 - ₹500</option>
        </select>
      </div>

      <div className="veg-container">
        {currentItems.map(item=>(
          <div className="card" key={item.id}>
            <div className="img-box">
              <img src={item.imageurl} alt={item.name}/>
              <span className="badge">PURE VEG</span>
            </div>
            <div className="card-body">
              <h2>{item.name}</h2>
              <div className="rating">{renderStars(item.rating)}</div>
              <p>{item.description}</p>
              <div className="price-box">
                <span className="price">₹{item.price}</span>
                <span className="old-price">₹{item.oldPrice}</span>
              </div>
              <button className="cart-btn" onClick={()=>{dispatch(addItem(item));toast.success(`${item.name} added to cart`);}}>🛒 Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
                <button className="page-btn nav-btn" onClick={()=>setCurrentPage(currentPage-1)} disabled={currentPage===1}>Prev</button>
        {Array.from({length: totalPages}, (_,i)=>(
          <button key={i} onClick={()=>setCurrentPage(i+1)} className={`page-btn ${currentPage===i+1?"active":""}`}>
            {i+1}
          </button>
        ))}
        <button className="page-btn nav-btn" onClick={()=>setCurrentPage(currentPage+1)} disabled={currentPage===totalPages}>Next</button>
      </div>
    </>
  );
}

export default Veg;
