<<<<<<< HEAD
import { Dashy } from '../Dashy';
import { Button } from '@mui/material';
import TableEmployee from '@/pages/Admin/components/TableEmployee.tsx';
import { useEffect, useRef, useState } from 'react';
import EmployeeApi from '@/api/employee.ts';
import { EmployeeData } from '@/api/types.ts';
import useErrorPopup from '@/hooks/useErrorPopup.tsx';

const Employee = () => {
  const countFetch = useRef(0);
  const [errorNode, setErrorNode] = useErrorPopup();

  const [selected, setSelected] = useState<number[]>([]);

  const [data, setData] = useState<EmployeeData[]>([]);
  const fetchData = async () => {
    try {
      if (data.length === 0 && countFetch.current < 4) {
        setData(await EmployeeApi.findAll());
      }
    } catch (e) {
      setErrorNode(e as Error);
    }
    if (countFetch.current <= 4) {
      countFetch.current++;
    }
  };

  useEffect(() => {
    fetchData();
  });

  const handleDelete = async () => {
    for (const i of selected) {
      EmployeeApi.delete(data[i].id)
        .then(async () => {
          setSelected((p) => {
            return p.filter((v) => v !== i);
          });
          setData(await EmployeeApi.findAll());
        })
        .catch(setErrorNode);
    }
  };

  const handleSelect = (indexes: number[]) => {
    setSelected(indexes);
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

  return (
    <Dashy>
      <div className="flex justify-between p-2">
        <span className="text-xl font-semibold">Manage your employees</span>

        <div>
          <SwitchBtnFeatures />
        </div>
      </div>
      <TableEmployee data={data} onSelect={handleSelect} />
      {errorNode}
    </Dashy>
  );
};

export default Employee;
=======
import { Dashy } from '../Dashy';
import { Button } from '@mui/material';
import TableEmployee from '@/pages/Admin/components/TableEmployee.tsx';
import { useEffect, useRef, useState } from 'react';
import EmployeeApi from '@/api/employee.ts';
import { EmployeeData } from '@/api/types.ts';
import useErrorPopup from '@/hooks/useErrorPopup.tsx';

const Employee = () => {
  const renderIncr = useRef(0);
  const [errorNode, setErrorNode] = useErrorPopup();

  const [selectLength, setSelectLength] = useState(0);
  const [selected, setSelected] = useState<number[]>([]);

  const [data, setData] = useState<EmployeeData[]>([]);
  const fetchData = async () => {
    setData(await EmployeeApi.findAll());
  };

  useEffect(() => {
    if (renderIncr.current === 1) {
      fetchData();
    }
    if (renderIncr.current < 2) {
      renderIncr.current++;
    }
  }, []);

  const handleDelete = async () => {
    for (const i of selected) {
      EmployeeApi.delete(data[i].id)
        .then(async () => {
          setSelected((p) => {
            return p.filter((v) => v !== i);
          });
          setData(await EmployeeApi.findAll());
        })
        .catch(setErrorNode);
    }
  };

  const SwitchBtnFeatures = () => {
    switch (selectLength) {
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

  const handleSelect = (indexes: number[]) => {
    setSelectLength(indexes.length);
  };

  return (
    <Dashy>
      <div className="flex justify-between p-2">
        <span className="text-xl font-semibold">Manage your employees</span>

        <div>
          <SwitchBtnFeatures />
        </div>
      </div>
      <TableEmployee data={data} onSelect={handleSelect} />
      {errorNode}
    </Dashy>
  );
};

export default Employee;
>>>>>>> b541103 (style: reformat Visitor)
