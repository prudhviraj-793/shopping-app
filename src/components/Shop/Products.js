import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummyProducts = [
  { id: "p1", price: 5, title: "book", description: "my book" },
  { id: "p2", price: 7, title: "pen", description: "my pen" },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyProducts.map((item) => (
          <ProductItem key={item.id} item={{...item}} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
