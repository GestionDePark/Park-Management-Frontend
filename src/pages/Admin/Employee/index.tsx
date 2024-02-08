import { Dashy } from '../Dashy';
import {
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { ChangeEventHandler, useState } from 'react';
import EmployeeApi from '@/api/employee';
import storage from '@/core/storage.ts';
import useErrorPopup from '@/hooks/useErrorPopup.tsx';
import data from './data';

const Employee = () => {
  const [selectAllDispatch, setAllDispatch] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);
  const [errorNode, setErrorNode] = useErrorPopup();

  const onCheckAll: ChangeEventHandler<HTMLInputElement> = (ev) => {
    const isChecked: boolean = ev.target.checked;
    setAllDispatch(isChecked);
    if (isChecked) {
      setSelected(data.map((_, i) => i));
    } else {
      setSelected([]);
    }
  };

  const handleDelete = async () => {
    const adminToken: string = storage.local.get('user_token');
    for (const i of selected) {
      EmployeeApi.delete(data[i].id, adminToken)
        .then(() => {
          setSelected((p) => {
            return p.filter((v) => v !== i);
          });
        })
        .catch(setErrorNode);
    }
  };

  const SwitchBtnFeatures = () => {
    switch (selected.length) {
      case 0:
        return <Button variant="outlined">Add new</Button>;
      case 1:
        return (
          <div className="center-flex gap-2">
            <Button variant="outlined">Modify</Button>
            <Button variant="outlined" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        );
      default:
        return (
          <Button variant="outlined" onClick={handleDelete}>
            Delete
          </Button>
        );
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
    <Dashy>
      <div className="flex justify-between p-2">
        <span className="text-xl font-semibold">Manage your employees</span>

        <div>
          <SwitchBtnFeatures />
        </div>
      </div>

      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                onChange={onCheckAll}
                value={selectAllDispatch}
                checked={selectAllDispatch}
              />
              <span>User</span>
            </TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Salary</TableCell>
            <TableCell>Joined at</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((v, i) => (
            <TableRow key={v.joinedAt + '_' + v.user + '_' + i}>
              <TableCell>
                <Checkbox
                  checked={selected.includes(i)}
                  value={selected.includes(i)}
                  onChange={handleOn(i)}
                />
                <span>{v.user}</span>
              </TableCell>
              <TableCell>{v.job}</TableCell>
              <TableCell>{v.salary}</TableCell>
              <TableCell>{v.joinedAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {errorNode}
    </Dashy>
  );
};

export default Employee;
