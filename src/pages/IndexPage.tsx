import App from '../App';
import Cart from '../components/Cart';
import Products from '../components/Products';
import Header from '../components/showcase/Header';

function IndexPage() {
  return (
    <App>
      <Header />
      <div className="shopping-area gap-4">
        <div className="mt-3 mt-sm-0">
          <Products />
        </div>
        <div>
          <Cart />
        </div>
      </div>
    </App>
  );
}

export default IndexPage;
