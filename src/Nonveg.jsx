import React, { useState } from "react";

import "./Veg.css";

import { useDispatch } from "react-redux";

import { addItem } from "./cartSlice";

import { toast } from "react-toastify";

function Nonveg() {

  const dispatch = useDispatch();

  const NonVegitems = [

    { id:1, name:"Chicken Curry", price:220, oldPrice:300, rating:4.3, imageurl:'/Images/Nonveg_items/ChickenCurry.jpg', description:"Spicy chicken curry" },

    { id:2, name:"Mutton Curry", price:320, oldPrice:420, rating:4.5, imageurl:'/Images/Nonveg_items/MuttonCurry.jpg', description:"Rich mutton gravy" },

    { id:3, name:"Fish Fry", price:250, oldPrice:330, rating:5.0, imageurl:'/Images/Nonveg_items/FishFry.jpg', description:"Crispy fish fry" },

    { id:4, name:"Egg Curry", price:120, oldPrice:180, rating:4.0, imageurl:'/Images/Nonveg_items/EggCurry.jpg', description:"Egg curry" },

    { id:5, name:"Chicken Biryani", price:280, oldPrice:350, rating:4.6, imageurl:'/Images/Nonveg_items/ChickenBiryani.jpg', description:"Biryani" },

    { id:6, name:"Fried Chicken", price:260, oldPrice:320, rating:4.4, imageurl:'/Images/Nonveg_items/FriedChicken.jpg', description:"Fried chicken" },

    { id:7, name:"Grilled Chicken", price:300, oldPrice:380, rating:5.0, imageurl:'/Images/Nonveg_items/GrilledChicken.jpg', description:"Grilled chicken" },

    { id:8, name:"Prawns Fry", price:350, oldPrice:450, rating:4.3, imageurl:'/Images/Nonveg_items/PrawnsFry.jpg', description:"Prawns fry" },

    { id:9, name:"Fish Curry", price:270, oldPrice:340, rating:4.2, imageurl:'/Images/Nonveg_items/FishCurry.jpg', description:"Fish curry" },

    { id:10, name:"Chicken 65", price:230, oldPrice:300, rating:4.4, imageurl:'/Images/Nonveg_items/Chicken65.jpg', description:"Chicken 65" },

    { id:11, name:"Chicken Tikka", price:260, oldPrice:330, rating:4.5, imageurl:'/Images/Nonveg_items/ChickenTikka.jpg', description:"Tikka" },

    { id:12, name:"Mutton Biryani", price:340, oldPrice:420, rating:5.0, imageurl:'/Images/Nonveg_items/MuttonBiryani.jpg', description:"Mutton biryani" },

    { id:13, name:"Egg Biryani", price:180, oldPrice:250, rating:4.1, imageurl:'/Images/Nonveg_items/EggBiryani.jpg', description:"Egg biryani" },

    { id:14, name:"Chicken Noodles", price:190, oldPrice:260, rating:4.2, imageurl:'/Images/Nonveg_items/ChickenNoodles.jpg', description:"Noodles" },

    { id:15, name:"Chicken Fried Rice", price:200, oldPrice:270, rating:4.3, imageurl:'/Images/Nonveg_items/ChickenFriedRice.jpg', description:"Fried rice" },

    { id:16, name:"Fish Biryani", price:300, oldPrice:380, rating:5.0, imageurl:'/Images/Nonveg_items/FishBiryani.jpg', description:"Fish biryani" },

    { id:17, name:"Chicken Lollipop", price:240, oldPrice:310, rating:4.3, imageurl:'/Images/Nonveg_items/ChickenLollipop.jpg', description:"Starter" },

    { id:18, name:"Mutton Fry", price:350, oldPrice:430, rating:4.5, imageurl:'/Images/Nonveg_items/MuttonFry.jpg', description:"Mutton fry" },

    { id:19, name:"Prawns Curry", price:360, oldPrice:450, rating:5.0, imageurl:'/Images/Nonveg_items/PrawnsCurry.jpg', description:"Prawns curry" },

    { id:20, name:"Omelette", price:90, oldPrice:140, rating:4.0, imageurl:'/Images/Nonveg_items/Omelette.jpg', description:"Omelette" },

    { id:21, name:"Shawarma", price:180, oldPrice:250, rating:4.2, imageurl:'/Images/Nonveg_items/Shawarma.jpg', description:"Wrap" },

    { id:22, name:"Chicken Burger", price:150, oldPrice:220, rating:5.0, imageurl:'/Images/Nonveg_items/ChickenBurger.jpg', description:"Burger" },

    { id:23, name:"Chicken Pizza", price:260, oldPrice:350, rating:4.4, imageurl:'/Images/Nonveg_items/ChickenPizza.jpg', description:"Pizza" },

    { id:24, name:"Chicken Sandwich", price:130, oldPrice:190, rating:4.1, imageurl:'/Images/Nonveg_items/ChickenSandwich.jpg', description:"Sandwich" },

    { id:25, name:"Chicken Pasta", price:200, oldPrice:280, rating:4.2, imageurl:'/Images/Nonveg_items/ChickenPasta.jpg', description:"Pasta" },

    { id:26, name:"Chicken Wings", price:220, oldPrice:300, rating:4.3, imageurl:'/Images/Nonveg_items/ChickenWings.jpg', description:"Wings" }

  ];

  /* ===== SEARCH ===== */

  const [search, setSearch] = useState("");

  /* ===== FILTER ===== */

  const [maxPrice, setMaxPrice] = useState("");

  /* ===== PAGINATION ===== */

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  /* ===== STARS ===== */

  const renderStars = (rating) => {

    const full = Math.floor(rating);

    const empty = 5 - full;

    return "★".repeat(full) + "☆".repeat(empty);
  };

  /* ===== FILTER LOGIC ===== */

  const filteredItems = NonVegitems.filter((item) => {

    const searchMatch =
      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        );

    let priceMatch = true;

    if (maxPrice === "50") {

      priceMatch =
        item.price >= 10 &&
        item.price <= 50;
    }

    else if (maxPrice === "100") {

      priceMatch =
        item.price >= 51 &&
        item.price <= 100;
    }

    else if (maxPrice === "200") {

      priceMatch =
        item.price >= 101 &&
        item.price <= 200;
    }

    else if (maxPrice === "300") {

      priceMatch =
        item.price >= 201 &&
        item.price <= 300;
    }

    else if (maxPrice === "400") {

      priceMatch =
        item.price >= 301 &&
        item.price <= 400;
    }

    else if (maxPrice === "500") {

      priceMatch =
        item.price >= 401 &&
        item.price <= 500;
    }

    return searchMatch && priceMatch;
  });

  /* ===== TOTAL PAGES ===== */

  const totalPages =
    Math.ceil(
      filteredItems.length / itemsPerPage
    );

  /* ===== CURRENT ITEMS ===== */

  const currentItems =
    filteredItems.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  return (

    <>

      <h1 className="page-title">

        🍗 <u>Spicy & Tasty NonVeg Specials</u> 🍗

      </h1>

      {/* ===== SEARCH + FILTER ===== */}

      <div className="filter-box">

        <input

          type="text"

          placeholder="Search food item..."

          value={search}

          onChange={(e) => {

            setSearch(e.target.value);

            setCurrentPage(1);
          }}

          className="search-input"
        />

        <select

          value={maxPrice}

          onChange={(e) => {

            setMaxPrice(e.target.value);

            setCurrentPage(1);
          }}

          className="price-filter"
        >

          <option value="">

            All Prices

          </option>

          <option value="50">

            ₹10 - ₹50

          </option>

          <option value="100">

            ₹51 - ₹100

          </option>

          <option value="200">

            ₹101 - ₹200

          </option>

          <option value="300">

            ₹201 - ₹300

          </option>

          <option value="400">

            ₹301 - ₹400

          </option>

          <option value="500">

            ₹401 - ₹500

          </option>

        </select>

      </div>

      {/* ===== CARDS ===== */}

      <div className="veg-container">

        {currentItems.map((item) => (

          <div
            className="card"
            key={item.id}
          >

            <div className="img-box">

              <img
                src={item.imageurl}
                alt={item.name}
              />

              <span
                className="badge"

                style={{
                  background: "red"
                }}
              >

                NON VEG

              </span>

            </div>

            <div className="card-body">

              <h2>{item.name}</h2>

              <div className="rating">

                {renderStars(item.rating)}

              </div>

              <p>{item.description}</p>

              <div className="price-box">

                <span className="price">

                  ₹{item.price}

                </span>

                <span className="old-price">

                  ₹{item.oldPrice}

                </span>

              </div>

              <button

                className="cart-btn"

                onClick={() => {

                  dispatch(addItem(item));

                  toast.success(
                    `${item.name} added to cart`
                  );
                }}
              >

                🛒 Add to Cart

              </button>

            </div>

          </div>
        ))}
      </div>

      {/* ===== PAGINATION ===== */}

      <div className="pagination">

        <button

          className="page-btn nav-btn"

          onClick={() =>
            setCurrentPage(currentPage - 1)
          }

          disabled={currentPage === 1}
        >

          Prev

        </button>

        {Array.from(
          { length: totalPages },

          (_, i) => (

            <button

              key={i}

              onClick={() =>
                setCurrentPage(i + 1)
              }

              className={`page-btn ${
                currentPage === i + 1
                  ? "active"
                  : ""
              }`}
            >

              {i + 1}

            </button>
          )
        )}

        <button

          className="page-btn nav-btn"

          onClick={() =>
            setCurrentPage(currentPage + 1)
          }

          disabled={
            currentPage === totalPages
          }
        >

          Next

        </button>

      </div>

    </>
  );
}

export default Nonveg;