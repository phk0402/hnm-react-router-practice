import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, serQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col key={index} lg={3} className="card-wrap">
              <ProductCard menu={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
