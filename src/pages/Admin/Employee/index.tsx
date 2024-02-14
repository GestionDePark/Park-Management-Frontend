import { Button } from '@mui/material';
import TableEmployee from '@/pages/Admin/components/TableEmployee';
import { useEffect, useRef, useState } from 'react';
import EmployeeApi from '@/api/providers/EmployeeProvider';
import { EmployeeData } from '@/api/types/Employee.type';
import useErrorPopup from '@/hooks/useErrorPopup';
import { Dashy } from '../Dashy';
import { AddEmployeeDialog } from '@/pages/Admin/Employee/AddEmployeeDialog';

const Employee = () => {
  const renderIncr = useRef(0);
  const countFetch = useRef(0);
  const [errorNode, setErrorNode] = useErrorPopup();

  const [selected, setSelected] = useState<number[]>([]);

  const [data, setData] = useState<EmployeeData[]>([]);

  const [openAddDialog, setOpenAddDialog] = useState(false);

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
    if (renderIncr.current === 1) {
      fetchData();
    }
    if (renderIncr.current < 2) {
      renderIncr.current++;
    }
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
        return (
          <Button
            variant="outlined"
            onClick={() => {
              setOpenAddDialog(true);
            }}
          >
            Add new
          </Button>
        );
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
      <AddEmployeeDialog
        open={openAddDialog}
        onClose={() => {
          setOpenAddDialog(false);
        }}
        fullWidth
        PaperProps={{
          component: 'form',
          onSubmit: {},
          sx: {
            borderRadius: '10px',
            minWidth: '420px',
          },
        }}
        onCloseClick={() => {
          setOpenAddDialog(false);
        }}
      />
    </Dashy>
  );
};

export default Employee;
