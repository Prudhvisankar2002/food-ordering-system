    import React, { useState } from "react";
    import { useSelector, useDispatch } from "react-redux";
    import {increaseQty,decreaseQty,removeItem,clearCart} from "./cartSlice";
    import {applyCoupon,resetCoupon} from "./couponSlice";
    import { toast } from "react-toastify";
    import { useNavigate } from "react-router-dom";
    import "react-toastify/dist/ReactToastify.css";
    import { coupons } from "./coupons";
    import "./Cart.css";
    import Swal from "sweetalert2";
    import { addOrder } from "./orderSlice";
    import emailjs from "@emailjs/browser";

    function Cart() {

    const items = useSelector(state => state.cart.items);

    const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
    const { code, discount: couponDiscount, applied, message } =useSelector(state => state.couponDetails);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [discount, setDiscount] = useState(0);
    const [cupon, setCupon] = useState("");
    const [email, setEmail] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [cardDetails, setCardDetails] = useState({
                number: "",
                cvv: "",
                expiry: "",
                otp: ""
            });
    const [otpSent, setOtpSent] = useState(false);
    const [paymentDone, setPaymentDone] = useState(false);

    const grandTotal = items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const discountAmount = (grandTotal * discount) / 100;
    const afterDiscount = grandTotal - discountAmount;
    const couponDiscountAmount = (afterDiscount * couponDiscount) / 100;
    const finalAmountAfterCoupon = afterDiscount - couponDiscountAmount;
    const taxAmount = (finalAmountAfterCoupon * 18) / 100;
    const netPay = finalAmountAfterCoupon + taxAmount;

    const handleCardSubmit = () => {
        if (!cardDetails.number || !cardDetails.cvv || !cardDetails.expiry) {
        Swal.fire({ icon: "warning", title: "Enter all card details" });
        return;
        }
        setOtpSent(true);
        Swal.fire({ icon: "info", title: "OTP sent to card holder" });
    };

    const handleOtpSubmit = () => {
        if (!cardDetails.otp) {
        Swal.fire({ icon: "warning", title: "Enter OTP" });
        return;
        }
        setPaymentDone(true);
        Swal.fire({ icon: "success", title: "Payment Successful" });
    };

    const templateParams={
    order_id:"ORDER123",
    orders:items.map(item=>({
    name:item.name,
    price:(item.price*item.quantity).toFixed(2),
    units:item.quantity
    })),
    cost:{
    shipping:50,
    tax:taxAmount.toFixed(2),
    total:netPay.toFixed(2)
    },
    email:email
    };

    const handlePlaceOrder=()=>{
        if(!isLoggedIn){

            navigate("/login");

            return;

            }

        if(
        email.trim()===""||
        paymentMethod===""
        ){

        Swal.fire({

        icon:"warning",

        title:"Enter Email & Select Payment"

        });

        return;

        }

        dispatch(

        addOrder({

        items:items,

        total:netPay,

        payment:paymentMethod,

        date:new Date().toLocaleString()

        })

        );

        Swal.fire({

            title:"🎉 Order Placed Successfully!",

            text:"Your delicious food is on the way 🚚",

            icon:"success",

            showConfirmButton:false,

            timer:2500

            });

            emailjs.send(

            "service_lh5e93d",

            "template_su6dtgm",

            templateParams,

            "nqwOBEyDdn0Ns_LSV"

            )

            .then(()=>{

            Swal.fire({

            icon:"success",

            title:"📧 Order bill sent to customer email"

            });

            dispatch(clearCart());

            navigate("/orders");

            })

            .catch((error)=>{

            console.log(error);

            Swal.fire({

            icon:"error",

            title:"Email sending failed"

            });

            });

        };
    return (
        <div className="cart-container">
        <h1 className="cart-title">🛒 <u>Cart Items</u> 🛒</h1>

        {items.length > 0 && (
            <div className="clear-btn-box">
            <button
                className="clear-btn"
                onClick={() => {
                Swal.fire({
                    icon: "warning",
                    title: "Clear Cart?",
                    text: "All items removed",
                    showCancelButton: true
                }).then((result) => {
                    if (result.isConfirmed) {
                    dispatch(clearCart());
                    dispatch(resetCoupon());
                    }
                });
                }}
            >
                🗑 Clear All Cart
            </button>
            </div>
        )}

        {items.length === 0 && (
            <div className="empty-cart">
            <h2>😔 Cart is Empty 😔</h2>
            <p>Add delicious food items</p>
            <button className="shop-btn" onClick={() => navigate("/veg")}>
                🍔 Start Shopping
            </button>
            </div>
        )}

        {items.map((item) => (
            <div key={item.id} className="cart-card">
            <div className="cart-left">
                <img src={item.imageurl} alt={item.name} className="cart-image" />
                <div>
                <h3>{item.name}</h3>
                <p>₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}</p>
                <div className="qty-box">
                    <button
                    className="minus-btn"
                    onClick={() => dispatch(decreaseQty(item.id))}
                    >➖</button>
                    <span>{item.quantity}</span>
                    <button
                    className="plus-btn"
                    onClick={() => dispatch(increaseQty(item.id))}
                    >➕</button>
                </div>
                </div>
            </div>
            <button
                className="remove-btn"
                onClick={() => {
                dispatch(removeItem(item.id));
                Swal.fire({ icon: "success", title: `${item.name} Removed` });
                }}
            >
                ❌ Remove
            </button>
            </div>
        ))}

        {items.length > 0 && (
            <div className="bill-section">
            <div className="bill-center-wrapper">
                <h2 className="total-title">🧾 Order Items</h2>
            
                <div className="bill-card">
                <h2>💰 Bill Details</h2>
                <hr />
                <p>Total Amount: <strong>₹{grandTotal.toFixed(2)}</strong></p>
                <p>Discount: <strong>-₹{discountAmount.toFixed(2)}</strong></p>
                <p>After Discount: <strong>₹{afterDiscount.toFixed(2)}</strong></p>
                {applied && (
                    <>
                    <p>Coupon: <strong>{code}</strong></p>
                    <p>Coupon Amount: <strong>-₹{couponDiscountAmount.toFixed(2)}</strong></p>
                    </>
                )}
                <p>GST: <strong>+₹{taxAmount.toFixed(2)}</strong></p>
                <hr />
                <h3 className="net-pay">Final Net Pay: ₹{netPay.toFixed(2)}</h3>
                </div>

                <div className="discount-buttons">
                <button className="discount-btn orange" onClick={() => { setDiscount(10); toast.success("10% Discount"); }}>🎁 10%</button>
                <button className="discount-btn green" onClick={() => { setDiscount(20); toast.success("20% Discount"); }}>🔥 20%</button>
                <button className="discount-btn pink" onClick={() => { setDiscount(30); toast.success("30% Discount"); }}>🚀 30%</button>
                </div>

                <div className="coupon-card">
                <h2 className="coupon-title">🎁 Apply Coupon</h2>
                <div className="coupon-box">
                    <input
                    value={cupon}
                    onChange={(e) => setCupon(e.target.value)}
                    placeholder="Enter Coupon"
                    className="coupon-input"
                    />
                    <button
                    className="apply-btn"
                    onClick={() => {
                        if (cupon.trim() === "") {
                        Swal.fire({ icon: "warning", title: "Enter Coupon" });
                        return;
                        }
                        dispatch(resetCoupon());
                        const entered = cupon.toUpperCase();
                        if (entered in coupons) {
                        dispatch(applyCoupon(cupon));
                        } else {
                        Swal.fire({ icon: "error", title: "Invalid Coupon" });
                        }
                    }}
                    >
                    Apply Coupon
                    </button>
                </div>
                {message && <h3 className="coupon-message">{message}</h3>}
                </div>

                <div className="email-order-box">
                <h3>📧 Enter Email</h3>
                <input
                    type="email"
                    className="email-input"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter Gmail"
                    />
                </div>

                <div className="payment-box">
                <h3>💳 Select Payment Method</h3>
                <button
                    className={`pay-btn ${paymentMethod === "QR" ? "active-pay" : ""}`}
                    onClick={() => setPaymentMethod("QR")}
                >
                    📱 QR Code
                </button>
                                <button
                    className={`pay-btn ${paymentMethod === "Card" ? "active-pay" : ""}`}
                    onClick={() => setPaymentMethod("Card")}
                >
                    💳 Card
                </button>
                <button
                    className={`pay-btn ${paymentMethod === "COD" ? "active-pay" : ""}`}
                    onClick={() => setPaymentMethod("COD")}
                >
                    🚚 Cash On Delivery
                </button>
                </div>

                {/* ✅ QR Code Payment */}
                {paymentMethod === "QR" && (
                <div className="qr-section">
                    <h3>📱 Scan QR to Pay</h3>
                    <img
                    src="/Images/videos/qrcode.jpeg"  // your QR image in public folder
                    alt="QR Code"
                    className="qr-image"
                    />
                    <p className="qr-note">Scan this code using any UPI app to complete payment.</p>
                </div>
                )}

                {/* ✅ Card Payment */}
                {paymentMethod === "Card" && (
                <div className="card-section">
                    <h3>💳 Enter Card Details</h3>
                    <input
                    type="text"
                    placeholder="Card Number"
                    className="card-input"
                    value={cardDetails.number}
                    onChange={(e) =>
                        setCardDetails({ ...cardDetails, number: e.target.value })
                    }
                    />
                    <input
                    type="text"
                    placeholder="CVV"
                    className="card-input"
                    value={cardDetails.cvv}
                    onChange={(e) =>
                        setCardDetails({ ...cardDetails, cvv: e.target.value })
                    }
                    />
                    <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    className="card-input"
                    value={cardDetails.expiry}
                    onChange={(e) =>
                        setCardDetails({ ...cardDetails, expiry: e.target.value })
                    }
                    />
                    {!otpSent && (
                    <button className="apply-btn" onClick={handleCardSubmit}>
                        Submit Card Details
                    </button>
                    )}

                    {otpSent && !paymentDone && (
                    <>
                        <input
                        type="text"
                        placeholder="Enter OTP"
                        className="card-input"
                        value={cardDetails.otp}
                        onChange={(e) =>
                            setCardDetails({ ...cardDetails, otp: e.target.value })
                        }
                        />
                        <button className="apply-btn" onClick={handleOtpSubmit}>
                        Submit OTP
                        </button>
                    </>
                    )}

                    {paymentDone && (
                    <p className="payment-success">✅ Payment Completed Successfully</p>
                    )}
                </div>
                )}

                {/* ✅ COD Message */}
                {paymentMethod === "COD" && (
                <div className="cod-section">
                    <h3>🚚 Cash On Delivery</h3>
                    <p>Your order will be delivered in a few minutes. Please keep the amount ready.</p>
                </div>
                )}

                {/* ✅ Place Order */}
                <button
                className="order-btn"
                onClick={handlePlaceOrder}
                >

                🛒 Place Order

                </button>
            </div>
            </div>
        )}
        </div>
    );
    }

    export default Cart;
