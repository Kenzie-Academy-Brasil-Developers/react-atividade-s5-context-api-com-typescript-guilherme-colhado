import { CardsContainer } from "./Style/Container";
import { Header } from "./Style/Header";
import { useProducts } from "./Providers/Products";
import { useCart } from "./Providers/Cart";
import { CardComponent } from "./Components/Card";

function App() {
  const { products } = useProducts()
  const { carts, addToCart, removeToCart } = useCart()
  return (
    <main>
      <Header>
        <h1>Produtos</h1>
      </Header>
      <CardsContainer>
        {products.map(product=><CardComponent 
        key={product.idProducts} 
        title={product.title} 
        idProducts={product.idProducts} 
        add={addToCart} 
        remove={removeToCart}
        image={product.image} 
        price={product.price}
        product={product}
        />)}
      </CardsContainer>
      <CardsContainer>
        {carts.map(product=><CardComponent 
        key={product.idProducts} 
        title={product.title} 
        idProducts={product.idProducts} 
        add={addToCart} 
        remove={removeToCart}
        image={product.image} 
        price={product.price}
        product={product}
        idCart={product.idCart}
        />)}
      </CardsContainer>
    </main>
  );
}

export default App;
