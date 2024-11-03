import React from "react";
import Pagination from "@mui/material/Pagination";

import "./ProductsPagination.css";

export default function ProductsPagination(prop) {
  const { totalCount, page, handleChange } = prop;
  return (
    <div className="ProductsPagination">
      <Pagination count={totalCount} page={page} onChange={handleChange} />
    </div>
  );
}
