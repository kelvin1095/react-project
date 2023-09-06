import "./globals.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Navbar from "../components/navbar.jsx";

export const metadata = {
  title: "Index",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
