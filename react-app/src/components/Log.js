import '../style/log.css';
import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ButtonEscort from './ButtonEscort';
import Alert from './Alert';

  export default function Log(props) {
    // subscribe to client to get data from server
    props.Client.subscribe('visitors', 'log.js', loadData);

    let [rows, setRows] = useState(() => []);
    let [alertScanOpen, setAlertScanOpen] = useState(false);

    const columns =  [
      { field: 'id', headerName: 'ID', width: 70, hide : true },
      { field: 'firstName', headerName: 'First name', width: 130 },
      { field: 'lastName', headerName: 'Last name', width: 130 },
      {
        field: 'timeIn',
        headerName: 'Time In',
        sortable: true,
        width: 80
      },
      {
        field: 'timeOut',
        headerName: 'Time Out',
        sortable: true,
        width: 90
      },
      {
        field: 'escort',
        headerName: 'Escort',
        width: 130
      },
  ];

    function loadData(payload){
      addRows(payload)
    }

    function addRow(row){
      setRows((prevRows) => [...prevRows, row ]);
    }

    function addRows(rows){
      setRows((prevRows) => [].concat(prevRows, rows))
    }

    function closeAlertScan(){
      setAlertScanOpen(false);
    }

      return (
        <div style={{ height: '100vh', width: '100%' }}>
          <Alert 
            open={alertScanOpen} onClose={closeAlertScan}
            title="Please Scan ID"
            body="Please scan your ID."
          />
          <DataGrid
            initialState={{
              sorting: {
                sortModel: [{ field: 'id', sort: 'desc' }],
              },
            }}
            rows={rows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            checkboxSelection
            getRowClassName={(params) => {
              if(!params.row.escort) return 'no-escort';
              if(!params.row.timeOut) return 'no-time-out';
            }}
          />
          <ButtonEscort onClick={() => {
            addRow({ id: 8, lastName: 'Mungus', firstName: 'Hugh', escort : 'Timmothy Knockout'  });
            addRow({ id: 9, lastName: 'Mungus', firstName: 'Hugh' });
          }} />
        </div>
    );
  }