import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function pagesLayout({ children }) {
  return (
    <>

      <Navbar />

      {children}
      
      <Footer />
    </>
  );
}
