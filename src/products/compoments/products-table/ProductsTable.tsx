import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import styled from '@emotion/styled';

import { useProducts } from 'products';

const Image = styled.img`
  width:100%; 
`;

const IdCellStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & svg {
    visibility: hidden;
    cursor: pointer;

    &:hover {
      color: red;
    }
  }

  &:hover svg {
    visibility: visible;
  }
`;

interface ICellProps {
  value: number;
}
const IdCell = ({ value }: ICellProps) => {
  const { removeProduct } = useProducts();

  return (
    <IdCellStyled> 
      <DeleteIcon onClick={ () => removeProduct(value) } /> 
      <span>{ value }</span>
    </IdCellStyled>
  )
}

const columns: GridColDef[] = [
  { 
    field: 'id', 
    headerName: 'ID', 
    flex: 1, 
    renderCell: (params) => <IdCell value={ params.value }/>,
    align: 'right'
  },
  { 
    field: 'thumbnail', 
    headerName: 'Thumbnail', 
    sortable: false, 
    renderCell: (params) => <Image src={ params.value } />, 
    flex: 1
  },
  { field: 'title', headerName: 'Title', flex: 1, editable: true },
  { field: 'description', headerName: 'Description', flex: 4, editable: true },
  { field: 'year', headerName: 'Year', flex: 1, editable: true },
  { field: 'price', headerName: 'Price', flex: 1, editable: true },
  { field: 'rating', headerName: 'Rating', flex: 1, editable: true },
  { field: 'stock', headerName: 'Stock', flex: 1, editable: true },
  { field: 'category', headerName: 'Category', flex: 1, editable: true },
];

export const ProductsTable = () => {
  const { products, updateProduct } = useProducts();

  return (
    <DataGrid 
      columns={columns} 
      rows={products} 
      initialState={{
      pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      processRowUpdate={(row) => {
        updateProduct(row);
        return row;
      }}
    />
  )
};