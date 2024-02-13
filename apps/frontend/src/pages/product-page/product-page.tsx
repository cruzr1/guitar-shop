import { Helmet } from "react-helmet-async";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Tabs from '../../components/tabs/tabs';
import { adaptImage } from '../../helpers';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setGuitarFormError, setGuitarId } from '../../store/guitar-form/guitar-form.slice';
import { selectGuitarForm, selectGuitarFormError } from '../../store/guitar-form/guitar-form.selectors';
import ErrorMessage from '../../components/error-message/error-message';
import { getGuitarFormAction } from '../../store/api-actions';

export default function ProductPage (): JSX.Element {
  const dispatch = useAppDispatch();
  const productId = useParams().productId as string;
  if (!productId) {
    dispatch(setGuitarFormError(true));
  } else {
    dispatch(setGuitarFormError(false));
  }
  useEffect(() =>{
    let isMounted = true;
    if (isMounted) {
      dispatch(getGuitarFormAction(productId));
    }
    return () => {
      isMounted = false;
    };
  },[dispatch]);
  const guitarFormError = useAppSelector(selectGuitarFormError)
  const {imageURL, name, ...restProps} = useAppSelector(selectGuitarForm);
  return (
    <>
      {guitarFormError && <ErrorMessage />}
      {!guitarFormError && <div className="container">
        <Helmet>
          <title>Товар — Guitar-shop</title>
        </Helmet>
          <h1 className="page-content__title title title--bigger">Товар</h1>
          <Breadcrumbs isProduct />
          <div className="product-container"><img className="product-container__img" src={imageURL} srcSet={`${adaptImage(imageURL)} 2x`} width="90" height="235" alt={name}/>
            <div className="product-container__info-wrapper">
              <h2 className="product-container__title title title--big title--uppercase">{name}</h2>
              <br/>
              <br/>
              <Tabs {...restProps} />
            </div>
        </div>
      </div>}
    </>
  )
}
