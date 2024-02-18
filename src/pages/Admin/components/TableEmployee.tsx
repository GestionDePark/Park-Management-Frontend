import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import RowEmployee from '@/pages/Admin/components/RowEmployee';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { EmployeeData } from '@/api/types';
import NoContent from './NoContent';

interface Props {
  data: EmployeeData[];
  limitData?: number;
  onSelect?(rowIndexes: number[]): void;
}

const TableEmployee = ({ data, onSelect, limitData }: Props) => {
  const [selected, setSelected] = useState<number[]>([]);

  const handleSelectAll = (ev: ChangeEvent<HTMLInputElement>) => {
    const isChecked: boolean = ev.target.checked;
    if (isChecked) {
      const d: number[] = data.map((_, i) => i);
      setSelected(d);
      if (onSelect) onSelect(d);
    } else {
      setSelected([]);
      if (onSelect) onSelect([]);
    }
  };

  const handleOn = (index: number): ChangeEventHandler<HTMLInputElement> => {
    return (ev) => {
      const isChecked: boolean = ev.target.checked;
      if (isChecked) {
        const d = selected.concat(index);
        if (onSelect) onSelect(d);
        setSelected(d);
      } else {
        setSelected((p) => {
          const d = p.filter((v) => v !== index);
          if (onSelect) onSelect(d);
          return d;
        });
      }
    };
  };

  const listData = limitData ? data.slice(0, limitData) : data;

  return (
    <div>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              {onSelect ? <Checkbox onChange={handleSelectAll} /> : null}
              <span>Firstname</span>
            </TableCell>
            <TableCell>Lastname</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Joined at</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {listData.map((v, i) => (
            <RowEmployee
              data={v}
              key={v.id}
              rowIndex={i}
              handleOn={handleOn}
              selected={selected}
              checkbox={!!onSelect}
            />
          ))}
        </TableBody>
      </Table>
      {listData.length === 0 ? <NoContent message="No employee yet" /> : null}
    </div>
  );
};

export default TableEmployee;
