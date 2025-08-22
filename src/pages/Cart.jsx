import { Footer } from "../component/Footer";
import { Header } from "../component/Header";

const ItemsDetails = ( { cart } ) => {
  const listedItem = cart.map( ( { id, name, price, quantity } ) => {
    return (
      <li
        key={ id }
        className='list-group-item d-flex justify-content-between align-items-start'>
        <div className=''>
          <h5>{ name }</h5>
          <p className='fw-lighter'>Price: { price }</p>
          <br />
          <p>Quantity: { quantity }</p>
        </div>
        <span className=' text-bg-primary badge rounded'>
          Total Price: { ( price * quantity ).toFixed( 2 ) }
        </span>
      </li>
    );
  } );
  return listedItem;
};

export const Cart = () => {
  const cart = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];
  const totalPrice = cart.reduce( ( acc, curr ) => ( acc += ( curr.price * curr.quantity ) ), 0 )
  return (
    <>
      <Header />
      <main className='container'>
        <h3 className='display-3'>Shopping Cart</h3>
        <ul className='list-group'>
          <section className="py-3">
            <ItemsDetails cart={ cart } />
          </section>
        </ul>
        <div className="fw-bold">
        <h3>Total Price: ${totalPrice }</h3>
        </div>
      </main>
      <Footer />
    </>
  );
};
