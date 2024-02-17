import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import TableEmployee from '@/pages/Admin/components/TableEmployee';
import EmployeeApi from '@/api/providers/EmployeeProvider';
import { EmployeeData } from '@/api/types';
import useErrorPopup from '@/hooks/useErrorPopup';
import { Dashy } from '../Dashy';
import { AddEmployeeDialog } from './AddEmployeeDialog';
import { UpdateEmployeeDialog } from '@/pages/Admin/Employee/UpdateEmployeeDialog';
import AppUsesContext from '@/components/AppUsesContext';

const Employee = () => {
  const [renderFirst, setRenderFirst] = useState(true);
  const [errorNode, setErrorNode] = useErrorPopup();
  const [selected, setSelected] = useState<number[]>([]);
  const [data, setData] = useState<EmployeeData[]>([]);

  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openUpdateDialog, setOpenUpdateDialog] = useState(false);

  const fetchData = async () => {
    try {
      if (data.length === 0) {
        setData(await EmployeeApi.findAll());
      }
    } catch (e) {
      setErrorNode(e as Error);
    }
  };

  useEffect(() => {
    if (renderFirst) {
      setRenderFirst(false);
      fetchData();
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
            <Button variant="outlined" onClick={handleUpdateClick}>
              Modify
            </Button>
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

  const handleDataAdded = (data: EmployeeData) => {
    setData((p) => p.concat(data));
  };

  const handleUpdateClick = () => {
    setOpenUpdateDialog((p) => !p);
  };

  const handleCloseAddDial = () => {
    setOpenAddDialog(false);
  };

  const handleCloseUpdateDial = () => {
    setOpenUpdateDialog(false);
  };

  const handleModified = (i: number, data: EmployeeData) => {
    setData((p) => {
      p[i] = data;
      return p;
    });
  };

  return (
    <Dashy>
      <div className="flex justify-between p-2 mt-5">
        <Typography variant="h5" fontWeight="bold">
          Manage your employees
        </Typography>
        <div>
          <SwitchBtnFeatures />
        </div>
      </div>

      <TableEmployee data={data} onSelect={handleSelect} />

      <div className="mt-8 py-5 px-4">
        <AppUsesContext />
      </div>

      <UpdateEmployeeDialog
        onModified={handleModified}
        open={openUpdateDialog}
        onClose={handleCloseUpdateDial}
        onCloseClick={handleCloseUpdateDial}
        updateIndex={selected[0] >= 0 ? selected[0] : -1}
        employeeData={selected[0] >= 0 ? data[selected[0]] : null}
      />

      <AddEmployeeDialog
        onAddedData={handleDataAdded}
        open={openAddDialog}
        onClose={handleCloseAddDial}
        onCloseClick={handleCloseAddDial}
      />
      {errorNode}
    </Dashy>
  );
};

export default Employee;
