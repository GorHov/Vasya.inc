import React from 'react';
import './Table.scss';

interface Column {
  id: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  rows: { [key: string]: string | number }[];
}

const Table: React.FC<TableProps> = ({ columns, rows }) => {
  return (
    <table className="table ">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.id}>{row[column.id]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
