import { Link } from "react-router-dom"
import { Footer } from "../component/Footer"
import { Header } from "../component/Header"
import products from "../data/products"

const ProductListings = ( { data } ) => {
  const resultDisplay = data.map( ( { id, name, description, price, productImgUrl } ) => {
    return (
      <>
        <div className="card w-75 m-4">
          <div className="row">
            <div className="col-md-4 col-12">
              <img src="https://placehold.co/450" alt="placehold" className="img-fluid rounded-start" />
            </div>
            <div className="col-md-8 col-12">
              <div className="card-body">
                <h5 className="fw-semibold">{ name }</h5>
                <p className="card-text">{ description }</p>
                <p>Price: { price }</p>
                <Link to={ `/product/${ id }` } className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } )
  return resultDisplay;
}

const AffordableProduct = ( { price } ) => {
  const filterPrice = price.filter( ( { price } ) => price < 80 );
  const listedProduct = filterPrice.map( ( { name, description, price } ) => {
    return (
      <div>
        <h3>{ name }</h3>
        <p>{ description }</p><br />
        <p className="text-body-secondary">Price: ${ price }</p>
      </div>
    )
  } )
  return listedProduct
}

export const Product = () => {
  return (
    <>
      <Header />
      <main className="container">
        <section>
          <h1 className="fw-normal">Product Js</h1>
          <ProductListings data={ products } />
          <hr />
          <h2 className="display-3">Affordable Products</h2>
          <AffordableProduct price={ products } />
        </section>
      </main>
      <Footer />
    </>
  )
}