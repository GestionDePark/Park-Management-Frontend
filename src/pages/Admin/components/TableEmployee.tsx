<<<<<<< HEAD
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import RowEmployee from '@/pages/Admin/components/RowEmployee.tsx';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { EmployeeData } from '@/api/types.ts';

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

  return (
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
        {(limitData ? data.slice(0, limitData) : data).map((v, i) => (
          <RowEmployee
            data={v}
            key={v.id}
            checkbox={!!onSelect}
            selected={selected}
            rowIndex={i}
            handleOn={handleOn}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default TableEmployee;
=======
import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import RowEmployee from '@/pages/Admin/components/RowEmployee.tsx';
import { ChangeEvent, ChangeEventHandler, useState } from 'react';
import { EmployeeData } from '@/api/types.ts';

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
        setSelected((p) => p.concat(index));
      } else {
        setSelected((p) => {
          return p.filter((v) => v !== index);
        });
      }
    };
  };

  return (
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
        {(limitData ? data.slice(0, limitData) : data).map((v, i) => (
          <RowEmployee
            data={v}
            checkbox={!!onSelect}
            selected={selected}
            rowIndex={i}
            handleOn={handleOn}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default TableEmployee;
>>>>>>> b541103 (style: reformat Visitor)
