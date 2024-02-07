import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";
import LoginPage from '../../pages/login-page/login-page';
import { AppRoute } from '../../const';
import AddItemPage from '../../pages/add-item-page/add-item-page';
import EditItemPage from '../../pages/edit-item-page/edit-item-page';
import ErrorPage from '../../pages/error-page/error-page';
import ProductPage from '../../pages/product-page/product-page';
import ProductListPage from '../../pages/product-list-page/product-list-page';
import RegistrationPage from '../../pages/registration-page/registration-page';
import Layout from '../layout/layout';


export default function App (): JSX.Element {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route
              index
              element={<LoginPage />}
            />
            <Route
              path={AppRoute.AddItem}
              element={<AddItemPage />}
            />
            <Route
              path={AppRoute.EditItem}
              element={<EditItemPage />}
            />
            <Route
              path={AppRoute.Login}
              element={<LoginPage />}
            />
            <Route
              path={AppRoute.Register}
              element={<RegistrationPage />}
            />
            <Route
              path={AppRoute.Products}
              element={<ProductListPage />}
            />
            <Route
              path={AppRoute.ProductId}
              element={<ProductPage />}
            />
            <Route
              path={AppRoute.Error}
              element={<ErrorPage />}
            />
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
  )
}
