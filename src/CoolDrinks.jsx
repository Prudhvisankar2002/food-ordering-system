import React, { useState } from "react";

import { useDispatch } from "react-redux";

import { addItem } from "./cartSlice";

import { toast } from "react-toastify";

import "./Veg.css";

function CoolDrinks() {

  const dispatch = useDispatch();

  const CoolDrinksItems = [

    { id:1, name:"Coca Cola", price:40, oldPrice:60, rating:4.3, imageurl:'/Images/cooldrinks/Coca Cola.jpg', description:"Classic chilled cola" },

    { id:2, name:"Sprite", price:40, oldPrice:60, rating:4.2, imageurl:'/Images/cooldrinks/Sprite.jpg', description:"Lemon lime refreshment" },

    { id:3, name:"Thumbs Up", price:45, oldPrice:65, rating:4.4, imageurl:'/Images/cooldrinks/Thumbs Up.jpg', description:"Strong cola taste" },

    { id:4, name:"Fanta", price:40, oldPrice:60, rating:4.1, imageurl:'/Images/cooldrinks/Fanta.jpg', description:"Orange flavored soda" },

    { id:5, name:"Campa Cola", price:35, oldPrice:55, rating:4.0, imageurl:'/Images/cooldrinks/Campa Cola.jpg', description:"Popular cool drink" },

    { id:6, name:"Pepsi", price:40, oldPrice:60, rating:4.2, imageurl:'/Images/cooldrinks/Pepsi.jpg', description:"Refreshing cola drink" },

    { id:7, name:"Mountain Dew", price:45, oldPrice:65, rating:4.3, imageurl:'/Images/cooldrinks/Mountain Dew.jpg', description:"Citrus energy drink" },

    { id:8, name:"7 Up", price:40, oldPrice:60, rating:4.1, imageurl:'/Images/cooldrinks/7 Up.jpg', description:"Cool lemon soda" },

    { id:9, name:"Mirinda", price:40, oldPrice:60, rating:4.0, imageurl:'/Images/cooldrinks/Mirinda.jpg', description:"Sweet orange drink" },

    { id:10, name:"Limca", price:40, oldPrice:60, rating:4.2, imageurl:'/Images/cooldrinks/Limca.jpg', description:"Lemon cool drink" },

    { id:11, name:"Mint Mojito", price:109, oldPrice:160, rating:4.3, imageurl:'/Images/cooldrinks/Mint Mojito.jpg', description:"Minty refreshing drink" },

    { id:12, name:"Green Apple Mojito", price:119, oldPrice:180, rating:4.4, imageurl:'/Images/cooldrinks/Green Apple Mojito.jpg', description:"Tangy apple mojito" },

    { id:13, name:"Watermelon Juice", price:89, oldPrice:130, rating:4.1, imageurl:'/Images/cooldrinks/Watermelon Juice.jpg', description:"Fresh watermelon juice" },

    { id:14, name:"Orange Juice", price:99, oldPrice:140, rating:4.2, imageurl:'/Images/cooldrinks/Orange Juice.jpg', description:"Fresh orange juice" },

    { id:15, name:"Fruit Punch", price:129, oldPrice:190, rating:4.4, imageurl:'/Images/cooldrinks/Fruit Punch.jpg', description:"Mixed fruit cooler" },

    { id:16, name:"Chocolate Shake", price:149, oldPrice:220, rating:4.5, imageurl:'/Images/cooldrinks/Chocolate Shake.jpg', description:"Rich chocolate shake" },

    { id:17, name:"Strawberry Shake", price:139, oldPrice:210, rating:4.3, imageurl:'/Images/cooldrinks/Strawberry Shake.jpg', description:"Fresh strawberry shake" },

    { id:18, name:"Oreo Shake", price:159, oldPrice:230, rating:4.6, imageurl:'/Images/cooldrinks/Oreo Shake.jpg', description:"Creamy oreo blend" },

    { id:19, name:"KitKat Shake", price:169, oldPrice:240, rating:4.5, imageurl:'/Images/cooldrinks/KitKat Shake.jpg', description:"Crunchy chocolate shake" },

    { id:20, name:"Mango Shake", price:129, oldPrice:190, rating:4.4, imageurl:'/Images/cooldrinks/Mango Shake.jpg', description:"Sweet mango delight" },

    { id:21, name:"Vanilla Shake", price:119, oldPrice:180, rating:4.0, imageurl:'/Images/cooldrinks/Vanilla Shake.jpg', description:"Classic vanilla shake" },

    { id:22, name:"Butterscotch Shake", price:149, oldPrice:220, rating:4.3, imageurl:'/Images/cooldrinks/Butterscotch Shake.jpg', description:"Sweet butterscotch flavor" },

    { id:23, name:"Blueberry Shake", price:159, oldPrice:240, rating:4.5, imageurl:'/Images/cooldrinks/Blueberry Shake.jpg', description:"Blueberry cream shake" },

    { id:24, name:"Banana Shake", price:119, oldPrice:170, rating:4.1, imageurl:'/Images/cooldrinks/Banana Shake.jpg', description:"Healthy banana drink" },

    { id:25, name:"Dry Fruit Shake", price:179, oldPrice:260, rating:4.6, imageurl:'/Images/cooldrinks/Dry Fruit Shake.jpg', description:"Loaded dry fruits" },

    { id:26, name:"Cold Coffee", price:99, oldPrice:150, rating:4.2, imageurl:'/Images/cooldrinks/Cold Coffee.jpg', description:"Chilled coffee drink" }

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

  const filteredItems = CoolDrinksItems.filter((item) => {

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

        🥤 <u>Chilled Cool Drinks & Refreshments</u> 🥤

      </h1>

      {/* ===== SEARCH + FILTER ===== */}

      <div className="filter-box">

        <input

          type="text"

          placeholder="Search cool drink..."

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
                  background: "#00bcd4"
                }}
              >

                COOL DRINK

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

export default CoolDrinks;