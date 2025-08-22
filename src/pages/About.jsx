import { Link } from "react-router-dom"
import { Footer } from "../component/Footer"
import { Header } from "../component/Header"

const NavListings = ( { nav } ) => {
  const resultOutcome = nav.map( ( { title, path } ) => (
    <li className="list-group-item">
      <Link to={`${path}`} >{ title }</Link>
    </li>
  ) )
  return resultOutcome;
}

export const About = () => {
  const navbarData = [
    {
      id: 1,
      title: "Home",
      description: "description of home 1",
      date: new Date().toLocaleDateString(),
      path:"/"
    },
    {
      id: 1,
      title: "Product",
      description: "description of Product 1",
      date: new Date().toLocaleDateString(),
      path:"/product"
    },
    {
      id: 3,
      title: "Cart",
      description: "description of Cart 1",
      date: new Date().toLocaleDateString(),
      path:"/cart"
    },
    {
      id: 4,
      title: "Profile",
      description: "description of Profile 1",
      date: new Date().toLocaleDateString(),
      path:"/profile"
    },
  ]
  return (
    <>
      <Header />
      <main className="container py-3">
        <h3 className="display-4 fw-lighter">About Our Ecommerce Platform</h3>
        <hr />
        <p className="fw-lighter">
          Welcome to our ecommerce platform! We are dedicated to providing
          customers with a seamless and enjoyable shopping experience from start
          to finish.
        </p>
        <p className="fw-lighter">
          Our mission is to offer a wide selection of high-quality products at
          competative customer service and fast shopping
        </p>
        <p className="fw-lighter">
          At our ecommerce pet Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Sapiente perspiciatis nemo similique!
        </p>
        <p className="fw-lighter">
          Thank you for choosing our ecommerce platform. We look forward to
          serving to serving you and exceeding your expectations at every turn.
        </p>
        <section>
          <h1>Let's Explore</h1>
          <ul className="list-group">
            <NavListings nav={ navbarData } />
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}