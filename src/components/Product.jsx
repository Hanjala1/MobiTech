import React from "react";

import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const Product = ({items, cart , setCart}) => {
   
  const addToCart = (id,price,title,description,imgSrc) =>{
    const obj = { id, price, title, description, imgSrc }
    setCart([...cart, obj]);
    console.log("Cart element = ",cart)
    toast.success('Item added on cart', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <div key={product.id} className="col-lg-4 col-md-6 my-3">
                <div 
                  className="card h-100 shadow-lg rounded-4 border-0 bg-dark text-white"
                  style={{ transition: 'transform 0.3s', cursor: 'pointer' }}
                >
                  <Link 
                    to={`/product/${product.id}`}
                    style={{
                      display:'flex',
                      justifyContent:'center',
                      alignItems:'center',
                      padding: '15px',
                      backgroundColor:'#212529', // darker top section
                      borderTopLeftRadius:'1rem',
                      borderTopRightRadius:'1rem'
                    }}
                  >
                    <img
                      src={product.imgSrc}
                      className="card-img-top"
                      alt={product.title}
                      style={{ maxHeight: '200px', objectFit: 'contain' }}
                    />
                  </Link>
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold">{product.title}</h5>
                    <p className="card-text text-light" style={{ minHeight: '50px' }}>{product.description}</p>
                    <div className="d-flex justify-content-center gap-2 mt-3">
                      <button 
                        className="btn btn-primary fw-bold"
                        style={{ width: '100px', borderRadius:'0.5rem', boxShadow: '0 3px 6px rgba(0,0,0,0.4)' }}
                      >
                        {product.price} ₹
                      </button>
                      <button
                        onClick={()=>addToCart(product.id,product.price,product.title,product.description,product.imgSrc)}
                        className="btn btn-warning fw-bold"
                        style={{ width: '120px', borderRadius:'0.5rem', boxShadow: '0 3px 6px rgba(0,0,0,0.4)' }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
