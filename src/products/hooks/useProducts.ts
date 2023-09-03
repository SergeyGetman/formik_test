import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'core/store';
import { IProduct, add, addMultiple, addProductRequest, remove, update } from 'products';
import { deleteProductRequest } from 'products';

export const useProducts = () => {
  const dispatch = useDispatch();

  const addProduct = (product: Omit<IProduct, 'id'>) => addProductRequest(product)
    .then(({ id }) => dispatch(add({ ...product, id })));

  const removeProduct = (id: number) => deleteProductRequest(id)
    .then(({ id }: IProduct) => dispatch(remove(id)));

  return {
    products: useSelector((state: RootState) => state.products.list),
    addMultipleProducts: (products: IProduct[]) => dispatch(addMultiple(products)),
    updateProduct: (product: IProduct) => dispatch(update(product)),
    addProduct,
    removeProduct,
  };
};