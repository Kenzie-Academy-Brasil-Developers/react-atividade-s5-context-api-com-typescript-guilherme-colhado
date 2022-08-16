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
        add={addToCart} 
        remove={removeToCart}
        image={product.image} 
        price={product.price}
        product={product}
        />)}
      </CardsContainer>
      
      {carts.length && <>
        <Header>
          <h1>Carrinhos</h1>
        </Header>
        <CardsContainer>
          {carts.map(product=><CardComponent 
          key={product.idProducts} 
          title={product.title} 
          add={addToCart} 
          remove={removeToCart}
          image={product.image} 
          price={product.price}
          product={product}
          idCart={product.idCart}
          cart={product.cart}
          />)}
        </CardsContainer>
      </>}
    </main>
  );
}

export default App;
