import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from '../src/component/Header'
import { Footer } from '../src/component/Footer'
import { Link } from "react-router-dom";
const App = () => {

  const FeaturedProduct = ( { product } ) => {
    const listingsProduct = product.map( ( { id, name, description, imgUrl, productDetails } ) => {
      return (
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src={ imgUrl } alt="product_featured" className="img-fluid rounded-start" />
            <div className="card-body">
              <h3>{ name }</h3>
              <p className="fw-lighter">{ description }</p>
              <Link className="btn btn-primary" to={ `/${ id }`}>{ productDetails }</Link>
            </div>
          </div>
        </div>
      )
    })
    return listingsProduct
  }

  const productData = [
    {
      id: 1,
      name: "Product 1",
      description: `This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      imgUrl: "https://placehold.co/400x300/png",
      productDetails: "View Product"
    },
    {
      id: 2,
      name: "Product 2",
      description: `This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      imgUrl: "https://placehold.co/400x300/png",
      productDetails: "View Product"
    },
    {
      id: 3,
      name: "Product 3",
      description: `This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
      imgUrl: "https://placehold.co/400x300/png",
      productDetails: "View Product"
    },
  ]
  return (
    <>
      <Header />
      <main className="container">
        <h1>Featured Product</h1>
        <section className="py-3">
          <div className="row">
            <FeaturedProduct product={ productData } />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default App;