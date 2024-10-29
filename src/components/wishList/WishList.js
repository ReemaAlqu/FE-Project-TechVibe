import React from "react";

export default function WishList(prop) {
  const { wishList } = prop;

  if (wishList.length === 0){
    return <p>The wish List is empty.</p>;
  }
    return (
      <div>
        <h1>wishList</h1>
        {wishList.map((item) => {
          return (
            <div>
              <div>
                {item.title} - price: (${item.price})
              </div>
              <img src={item.image} alt={item.title} />
            </div>
          );
        })}
      </div>
    );
}
