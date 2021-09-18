import Navbar from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="page-content">{children}</main>
      <Footer />
    </>
  )
}