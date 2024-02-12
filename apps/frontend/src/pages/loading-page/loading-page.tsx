import { Helmet } from "react-helmet-async";
import './loading-page.styles.css'

export default function LoadingPage(): JSX.Element {
  return (
    <div className="spinner-container" >
      <Helmet>
        <title>Загрузка страницы — Guitar-shop</title>
      </Helmet>
      <div className="spinner"></div>
      <div className="text">Пожалуйста подождите . Идет авторизация...</div>
    </div>
  )
}
