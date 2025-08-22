import { Footer } from "../component/Footer"
import { Header } from "../component/Header"

export const Profile = () => {
    const profileDetails = {
        name: "Sourabh Pande",
        email: "example@gmail.com",
        position: "Software Developer | Tech Enthusiast",
        followers: 1000,
        following: 500,
        posts: 50,
        imgUrl: "https://placehold.co/250x250?text=Sourabh+Pande"
    }
    const { name, email, position, followers, following, posts, imgUrl } = profileDetails;
    return (
        <>
            <Header />
            <main className="container">
                <div className="py-4">
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <img src={ imgUrl } className="rounded-circle" alt="img-profile" />
                        </div>
                        <div className="col-md-8 col-12">
                            <div className="card-body ms-4 py-2">
                                <h5>{ name }</h5>
                                <p className="fw-lighter">{ email }</p>
                                <p className="fw-lighter">{ position }</p>
                                <p className="fw-lighter">Followers: { followers }</p>
                                <p className="fw-lighter">Following: { following }</p>
                                <p>Posts: { posts }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}