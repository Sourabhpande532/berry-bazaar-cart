import { useParams } from "react-router-dom";
import { Footer } from "../component/Footer"
import { Header } from "../component/Header"
import products from "../data/products";
export const ProductDetails = () => {
    const { productId } = useParams();
    const { id, name, description, price, availableColors, isReturnApplicable, productImageUrl } = products.find( ( { id } ) => id === Number( productId ) )
    return (
        <>
            <Header />
            <main className="container">
                <h3 className="py-2 fw-normal">{ name }</h3>
                <img src={ productImageUrl } alt="placehold" className="img-fluid rounded" />
                <div className="py-3">
                    <p className="text-body-secondary">Price: { price }</p>
                    <p className="text-body-secondary">Description: { description }</p>
                    <p className="text-body-secondary">
                        Colors: { availableColors.join( "," ) }
                    </p>
                    <p>
                        Return Policy:
                        { isReturnApplicable
                            ? " Return applicable within 7 days"
                            : " No return policy" }
                    </p>
                </div>
            </main>
            <Footer />
            )
        </>
    )
}