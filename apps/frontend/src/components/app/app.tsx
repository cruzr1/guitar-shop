import {Route, Routes} from 'react-router-dom';
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
import PrivateRoute from '../private-route/private-route';


export default function App (): JSX.Element {
  return (
    <HelmetProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route
            index
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.AddItem}
            element={
              <PrivateRoute>
                <AddItemPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.EditItem}
            element={
              <PrivateRoute>
                <EditItemPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Products}
            element={
              <PrivateRoute>
                <ProductListPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.ProductId}
            element={
              <PrivateRoute>
                <ProductPage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={AppRoute.Signin}
            element={<RegistrationPage />}
          />
          <Route
            path={AppRoute.Error}
            element={<ErrorPage />}
          />
        </Route>
      </Routes>
    </HelmetProvider>
  )
}
