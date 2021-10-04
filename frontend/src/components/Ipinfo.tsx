import * as React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type Props = {
  data: any;
};

function createRow(
  name: string,
  calories: string
) {
  return { name, calories };
}

const IpInfo: React.FC<Props> = ({ data }) => {

  return (
    <TableContainer sx={ {width: 400 } } component={Paper}>
      <Table sx={{ minWidth: 400}} aria-label="simple table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Created at:
            </TableCell>
            <TableCell>{data?.getIPInfo?.createdDate || ' '}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Updated at:
            </TableCell>
            <TableCell>{data?.getIPInfo?.updatedDate || ' '}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Expires at:
            </TableCell>
            <TableCell>{data?.getIPInfo?.expiresDate || ' ' }</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Organization: 
            </TableCell>
            <TableCell>{data?.getIPInfo?.organization || ' '}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              State\City:
            </TableCell>
            <TableCell>{data?.getIPInfo?.state || ' '}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Country:
            </TableCell>
            <TableCell>{data?.getIPInfo?.country || ' '}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
  </TableContainer>
  );
};

export default IpInfo;