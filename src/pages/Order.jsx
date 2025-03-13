import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid } from '../data/data/dummy';
import { Header } from '../components';
import TableComponent from "../components/TableComponent";
const Orders = () => {
  
  return (
    <div className="m-4 p-4 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-semibold mb-4">Orders</h2>
    <TableComponent columns={ordersGrid} data={ordersData} />
  </div>
  );
};
export default Orders;