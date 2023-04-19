import React from "react";
import menu from "./MyItems.json";
import { useNavigate } from "react-router";

function PrinceCaffeine() {
  // console.log("items", menu);
  const navigate = useNavigate()

  const handleNavigate =()=>{
    navigate('/usecallback')
  }
  return (
    <div>
      <div className="container">
        {menu?.map((items, index) => {
          return (
            <>
                <div className="items">
                  <div className="imagediv">
                    <img
                      className="imageClass"
                      src={items.imageId}
                      alt="items"
                    />
                  </div>
                  <div className="description">
                    <div className="titleClass">{items.title}</div>
                    <div className="titledescription">{items.description}</div>
                  </div>
                  <div className="price">
                    <h4>${items.price}</h4>
                  </div>
                </div>
            </>
          );
        })}
      </div>

      <h1>salePrice</h1>
      <div className="container">
        {menu?.map((items, index) => {
          return (
            <>
              {items.salePrice !== 0 && (
                <div className="items">
                  <div className="imagediv">
                    <img
                      className="imageClass"
                      src={items.imageId}
                      alt="items"
                    />
                  </div>
                  <div className="description">
                    <div className="titleClass">{items.title}</div>
                    <div className="titledescription">{items.description}</div>
                  </div>
                  <div className="price">
                    <h4>${items.price}</h4>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
      <button onClick={handleNavigate}>Usecallback</button>
    </div>
  );
}

export default PrinceCaffeine;
