import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from '../src/component/Header'
import { Footer } from '../src/component/Footer'
const App = () => {
  return (
    <>
      <Header />
      <main className="container-md">
        <h1>Featured Product</h1>
      </main>
      <Footer />
    </>
  )
}
export default App;