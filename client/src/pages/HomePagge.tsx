import NavBar from "../components/Header"
import Footer from "../components/Footer"
import BlogItem from "../components/BlogItem"

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen flex flex-col font-Inter">
        <NavBar />
        <main className="mt-24 mb-10 flex flex-col items-center gap-6">
         <BlogItem />
         <BlogItem />
         <BlogItem />
         <BlogItem />
        </main>
        <Footer />
      </div>
    </>
  )
}
