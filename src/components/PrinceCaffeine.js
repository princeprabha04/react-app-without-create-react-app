import React from "react";
import menu from "./MyItems.json";

function PrinceCaffeine() {
  console.log("items", menu);
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
    </div>
  );
}

export default PrinceCaffeine;
