import { Helmet } from "react-helmet-async";

export default function LoadingPage(): JSX.Element {
  return (
    <div className="container">
      <Helmet>
        <title>Загрузка страницы — Guitar-shop</title>
      </Helmet>
      <div className="spinner"></div>
    </div>
  )
}
