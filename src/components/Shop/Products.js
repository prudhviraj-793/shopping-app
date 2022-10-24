import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem title="Test Item" quantity={3} total={18} price={6} />
      </ul>
    </section>
  );
};

export default Products;
