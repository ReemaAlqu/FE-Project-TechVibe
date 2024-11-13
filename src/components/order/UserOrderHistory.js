import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import "./UserOrderHistory.css";

export default function UserOrderHistory(prop) {
  const { userData } = prop;
  const [orderList, setOrderList] = useState([]);

  //   fetch the order from BE
  function getOrderByUserId() {
    const token = localStorage.getItem("token");
    const url = `http://localhost:5125/api/v1/Order/Users/${userData.userID}`;

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setOrderList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getOrderByUserId();
  }, []);

  if (orderList.length === 0) {
    return <div>No order history yet</div>;
  }

  return (
    <div className="order-list-container">
      <h1>Order History</h1>
      <div className="order-list">
        {orderList.map((order) => {
          return <OrderItem key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
}

//**************************************************************************************** */
//   console.log(userData.orders, " this is the Order list ...");

//   return (
//     <ol>
//       {userData.orders.map((order) => {
//         return (
//           <li>
//             <h1>
//               number of Product in the cart= ({order.orderDetails.length})
//             </h1>

//             <h2>Order details:</h2>

//             {/* very important */}

//             {order.orderDetails.map((od) => {
//               return (
//                 <div>
//                   <p>Name: {od.product.name}</p>
//                   <p>Quantity : {od.quantity}</p>
//                   <p>Price :{od.product.price}</p>
//                   <hr></hr>
//                 </div>
//               );
//             })}
//           </li>
//         );
//       })}
//     </ol>
//   );
// }
