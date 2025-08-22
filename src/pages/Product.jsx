import { Link } from "react-router-dom"
import { Footer } from "../component/Footer"
import { Header } from "../component/Header"

const ProductListings = ( { data } ) => {

    const resultDisplay = data.map( ( { id, name, description, price, productImgUrl } ) => {
        return (
            <>
                <div className="card">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <img src={ productImgUrl } alt="placehold" className="img-fluid roundeds-start" />
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="card-body">
                                <h5 className="fw-semibold">{ name }</h5>
                                <p className="card-text">{ description }</p>
                                <p>Price: { price }</p>
                                <Link to={ `/product/p/:${ id }` }></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })
return resultDisplay;
}

export const Product = () => {
        const products = [
    {
      id: "1",
      name: "Product 1",
      description:
        "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 99.99,
      availableColors: ["Red", "Blue", "Green"],
      isReturnApplicable: true,
      productImageUrl: "https://placehold.co/300x300/png",
    },
    {
      id: "2",
      name: "Product 2",
      description:
        "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 129.99,
      availableColors: ["White", "Black"],
      isReturnApplicable: true,
      productImageUrl: "https://placehold.co/300x300/png",
    },
    {
      id: "3",
      name: "Product 3",
      description:
        "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 79.99,
      availableColors: ["Yellow"],
      isReturnApplicable: false,
      productImageUrl: "https://placehold.co/300x300/png",
    },
    {
      id: "4",
      name: "Product 4",
      description:
        "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 49.99,
      availableColors: ["Purple", "Yellow"],
      isReturnApplicable: true,
      productImageUrl: "https://placehold.co/300x300/png",
    },
  ];
    return (
        <>
            <Header />
            <main className="container">
                <h1>Product Js</h1>
                <section>
                    <ProductListings data={products} />
                </section>
            </main>
            <Footer />
        </>
    )
}