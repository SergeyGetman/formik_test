import { API_URL } from 'shared';
import { IProduct } from '../store';

export const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

export const fetchFirstData = () => fetch(`${API_URL}/products?limit=100`)
  .then(response => response.json())
  .then(data => data.products)
  .then(rawProducts => rawProducts.map(({
    id,
    title,
    description,
    price,
    rating,
    stock,
    category,
    thumbnail
  }: IProduct): IProduct => ({
    id,
    title,
    description,
    price,
    rating,
    stock,
    category,
    thumbnail,
    year: randomDate(new Date(1991, 0, 1), new Date()).getFullYear(),
  })));

export const deleteProductRequest = (id: number) => 
  fetch(`${API_URL}/products/${id}`, { method: 'DELETE' })
    .then(response => response.json())

export const addProductRequest = (product: Omit<IProduct, 'id'>) => 
  fetch(`${API_URL}/products/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(response => response.json());