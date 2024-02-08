import { Outlet } from "react-router-dom";
import Header from '../header/header';
import Footer from '../footer/footer';


export default function Layout ():JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
