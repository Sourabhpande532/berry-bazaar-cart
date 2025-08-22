import { useParams } from "react-router-dom";
import { Footer } from "../component/Footer"
import { Header } from "../component/Header"

export const ProductDetails = () => {
    const { productId } = useParams();
    const products = [
        {
            id: 1,
            name: "Product 1",
            description:
                "This is Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$99.99",
            availableColors: ["Red", "Blue", "Green"],
            isReturnApplicable: true,
            productImageUrl: "https://placehold.co/300x200/png",
        },
        {
            id: 2,
            name: "Product 2",
            description:
                "This is Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$129.99",
            availableColors: ["White", "Black"],
            isReturnApplicable: true,
            productImageUrl: "https://placehold.co/300x200/png",
        },
        {
            id: 3,
            name: "Product 3",
            description:
                "This is Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$79.99",
            availableColors: ["Yellow"],
            isReturnApplicable: false,
            productImageUrl: "https://placehold.co/300x200/png",
        },
        {
            id: 4,
            name: "Product 4",
            description:
                "This is Description of Product 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$49.99",
            availableColors: ["Purple", "Yellow"],
            isReturnApplicable: true,
            productImageUrl: "https://placehold.co/300x200/png",
        },
    ];
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