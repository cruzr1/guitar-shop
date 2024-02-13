import { Helmet } from "react-helmet-async";
import './loading-page.styles.css'
import { isStatusPending } from '../../helpers';
import { useAppSelector } from '../../hooks/hooks';
import { selectGuitarsLoadingStatus } from '../../store/guitars/guitars.selectors';

export default function LoadingPage(): JSX.Element {
  const isDataLoading = isStatusPending(useAppSelector(selectGuitarsLoadingStatus));
  return (
    <div className="spinner-container " >
      <Helmet>
        <title>Загрузка страницы — Guitar-shop</title>
      </Helmet>
      <div className="spinner"></div>
      <div className="text">Пожалуйста подождите . {isDataLoading ? 'Идет загрузка данных...' : 'Идет авторизация...'}</div>
    </div>
  )
}
