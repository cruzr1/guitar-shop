import { Helmet } from "react-helmet-async";
import ItemForm from '../../components/item-form/item-form'

export default function AddItemPage():JSX.Element {
  return (
    <>
      <Helmet>
        <title>Добавление товара — Guitar-shop</title>
      </Helmet>
      <ItemForm isAddForm />
    </>
  )
}
