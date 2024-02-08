import { Helmet } from "react-helmet-async";
import ItemForm from '../../components/item-form/item-form'

export default function EditItemPage ():JSX.Element {
  return (
    <>
      <Helmet>
        <title>Редактирование товара — Guitar-shop</title>
      </Helmet>
      <ItemForm />
    </>
  )
}
