import { Footer } from "../component/Footer"
import { Header } from "../component/Header"

export const About = () => {
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
            </main>
            <Footer />
        </>
    )
}