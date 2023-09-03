import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import styled from '@emotion/styled';

import { useProducts } from 'products/hooks';

const AddProductSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  author: Yup.string()
    .min(2, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
  year: Yup.number()
    .min(1991, 'Rating should be equal to or above 1991')
    .max(new Date().getFullYear(), 'Rating should be below or equal to current year')
    .required('Required'),
  rating: Yup.number()
    .min(0, 'Rating should be 0 or above')
    .max(5, 'Rating should be below 5')
    .required('Required'),
});

const initialValues = {
  title: '',
  author: '',
  year: 1991,
  rating: 0,
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  width: 50%;
  min-width: 500px;
  margin: 0 auto;
`;

export const AddProductForm = () => {
  const { addProduct } = useProducts();
  const formik = useFormik({
    initialValues,
    validationSchema: AddProductSchema,
    onSubmit: (values) => {
      addProduct(values)
        .then(() => alert('Product was added'));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2>Add new product</h2>

      <TextField
        fullWidth
        id="title"
        name="title"
        label="Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.touched.title && formik.errors.title}
      />

      <TextField
        fullWidth
        id="author"
        name="author"
        label="author"
        value={formik.values.author}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.author && Boolean(formik.errors.author)}
        helperText={formik.touched.author && formik.errors.author}
      />

      <TextField
        fullWidth
        id="year"
        name="year"
        label="year"
        type="number"
        value={formik.values.year}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.year && Boolean(formik.errors.year)}
        helperText={formik.touched.year && formik.errors.year}
      />

      <TextField
        fullWidth
        id="rating"
        name="rating"
        label="rating"
        type="number"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.rating && Boolean(formik.errors.rating)}
        helperText={formik.touched.rating && formik.errors.rating}
      />

      <Button color="primary" variant="contained" fullWidth type="submit">
        Submit
      </Button>
    </Form>
  );
};
