import { useAppDispatch } from '../../hooks/hooks';
import { loadGuitarsAction } from '../../store/api-actions';

export default function FailedLoading(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <>
      <p className="error__text">Не удалось загрузить список гитар. Попробуйте еще раз.</p>
      <button
        onClick={(evt: React.MouseEvent) => {
          evt.preventDefault();
          dispatch(loadGuitarsAction({}));
        }}
        type="button"
      >
        Попробовать ещё раз
      </button>
    </>
  );
}
