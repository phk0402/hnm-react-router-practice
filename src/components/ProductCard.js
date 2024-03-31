import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ menu }) => {
  const routeTo = useNavigate();
  const showDetail = () => {
    routeTo(`/product/${menu?.id}`);
  };

  return (
    <div onClick={showDetail}>
      <div className="img-wrap">
        <img src={menu?.img} alt="제품" />
      </div>
      <div>{menu?.choice && "Conscious Choice"}</div>
      <div>{menu?.title}</div>
      <div>{menu?.price}</div>
      <div>{menu?.price && "NEW"}</div>
    </div>
  );
};

export default ProductCard;
