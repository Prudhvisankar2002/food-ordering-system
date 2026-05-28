import React, { useState } from "react";

import "./Veg.css";

import { useDispatch } from "react-redux";

import { addItem } from "./cartSlice";

import { toast } from "react-toastify";

function Milk() {

  const dispatch = useDispatch();

  /* ===== MILK ITEMS ===== */

  const MilkItems = [

    { id:1, name:"Milk", price:60, oldPrice:80, rating:4.5, imageurl:'/Images/Milk_items/Tasty Milk.jpg', description:"Fresh pure milk" },

    { id:2, name:"Curd", price:50, oldPrice:70, rating:4.4, imageurl:'/Images/Milk_items/Curd.jpg', description:"Fresh homemade curd" },

    { id:3, name:"Butter", price:90, oldPrice:120, rating:4.3, imageurl:'/Images/Milk_items/Butter.jpg', description:"Creamy butter" },

    { id:4, name:"Cheese", price:140, oldPrice:180, rating:4.5, imageurl:'/Images/Milk_items/Cheese.jpg', description:"Fresh cheese block" },

    { id:5, name:"Paneer", price:160, oldPrice:220, rating:4.4, imageurl:'/Images/Milk_items/Paneer.jpg', description:"Soft paneer cubes" },

    { id:6, name:"Ghee", price:220, oldPrice:300, rating:4.6, imageurl:'/Images/Milk_items/Ghee.jpg', description:"Pure cow ghee" },

    { id:7, name:"Cream", price:120, oldPrice:160, rating:4.2, imageurl:'/Images/Milk_items/Cream.jpg', description:"Fresh milk cream" },

    { id:8, name:"Buttermilk", price:40, oldPrice:60, rating:4.1, imageurl:'/Images/Milk_items/Buttermilk.jpg', description:"Cool buttermilk" },

    { id:9, name:"Lassi", price:70, oldPrice:100, rating:4.3, imageurl:'/Images/Milk_items/Lassi.jpg', description:"Sweet lassi" },

    { id:10, name:"Ice Cream", price:110, oldPrice:150, rating:4.5, imageurl:'/Images/Milk_items/Ice Cream.jpg', description:"Cold ice cream" },

    { id:11, name:"Kulfi", price:90, oldPrice:130, rating:5.0, imageurl:'/Images/Milk_items/Kulfi.jpg', description:"Traditional kulfi" },

    { id:12, name:"Milk Powder", price:180, oldPrice:240, rating:4.2, imageurl:'/Images/Milk_items/Milk Powder.jpg', description:"Premium milk powder" },

    { id:13, name:"Condensed Milk", price:130, oldPrice:170, rating:4.3, imageurl:'/Images/Milk_items/Condensed Milk.jpg', description:"Sweet condensed milk" },

    { id:14, name:"Flavored Milk", price:80, oldPrice:110, rating:4.1, imageurl:'/Images/Milk_items/Flavored Milk.jpg', description:"Chocolate flavored milk" },

    { id:15, name:"Yogurt", price:60, oldPrice:90, rating:5.0, imageurl:'/Images/Milk_items/Yogurt.jpg', description:"Healthy yogurt" },

    { id:16, name:"Greek Yogurt", price:120, oldPrice:160, rating:3.0, imageurl:'/Images/Milk_items/Greek Yogurt.jpg', description:"Creamy greek yogurt" },

    { id:17, name:"Mozzarella Cheese", price:220, oldPrice:300, rating:4.6, imageurl:'/Images/Milk_items/Mozzarella Cheese.jpg', description:"Mozzarella cheese" },

    { id:18, name:"Cheddar Cheese", price:200, oldPrice:280, rating:4.4, imageurl:'/Images/Milk_items/Cheddar Cheese.jpg', description:"Cheddar cheese block" },

    { id:19, name:"Whipping Cream", price:170, oldPrice:220, rating:3.0, imageurl:'/Images/Milk_items/Whipping Cream.jpg', description:"Fresh whipping cream" },

    { id:20, name:"Chocolate Milk", price:90, oldPrice:120, rating:4.2, imageurl:'/Images/Milk_items/Chocolate Milk.jpg', description:"Chocolate milk drink" },

    { id:21, name:"Strawberry Milk", price:90, oldPrice:120, rating:4.1, imageurl:'/Images/Milk_items/Strawberry Milk.jpg', description:"Strawberry flavored milk" },

    { id:22, name:"Badam Milk", price:110, oldPrice:150, rating:5.0, imageurl:'/Images/Milk_items/Badam Milk.jpg', description:"Almond milk" },

    { id:23, name:"Rabri", price:160, oldPrice:220, rating:4.5, imageurl:'/Images/Milk_items/Rabri.jpg', description:"Traditional rabri" },

    { id:24, name:"Basundi", price:170, oldPrice:230, rating:4.4, imageurl:'/Images/Milk_items/Basundi.jpg', description:"Sweet thick milk dessert" },

    { id:25, name:"Kova", price:140, oldPrice:190, rating:4.3, imageurl:'/Images/Milk_items/Kova.jpg', description:"Milk kova sweet" }

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

  const filteredItems = MilkItems.filter((item) => {

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

        🥛<u> Creamy Milk & Shake Collection </u> 🥛

      </h1>

      {/* ===== SEARCH + FILTER ===== */}

      <div className="filter-box">

        <input

          type="text"

          placeholder="Search milk item..."

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
                  background: "#6a1b9a"
                }}
              >

                MILK

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

export default Milk;