import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '16 Mar, 2019', 'dx50', 'israelweed', '5', 130),
  createData(1, '16 Mar, 2019', 'dx20', 'viral50', '3', 101),
  createData(2, '16 Mar, 2019', 'dxviral20', 'igboost', '12', 540),
  createData(3, '16 Mar, 2019', 'viralsx50', 'all20', '40', 1000),
  createData(4, '15 Mar, 2019', 'weedninja', 'coitusfirst', '50', 1100),
];

const numbers = [
    createData(0, '91', '7073890734', 'yes', 'peerFlood', 'bool'),
  ];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders(props) {
  function dataval(number) {  
  if(number==='Stats')
  {
      return(
    <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>);
  }  
  else{
      return(
        <TableBody>
              {numbers.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.shipTo}</TableCell>
                  <TableCell>{row.paymentMethod}</TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>);
  };}
  function values(number) {  
    if(number==='Stats')
    {
        return(
            <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Scrap Group</TableCell>
              <TableCell>Target Group</TableCell>
              <TableCell>Numbers used</TableCell>
              <TableCell align="right">Members added</TableCell>
            </TableRow>
          </TableHead>);
    }  
    else{
        return(
            <TableHead>
            <TableRow>
              <TableCell>Code</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Used</TableCell>
              <TableCell>Last error</TableCell>
              <TableCell align="right">Use Again</TableCell>
            </TableRow>
          </TableHead>);
    };}
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent {props.order}</Title>
      <Table size="small">
      {values(props.order)}
        {dataval(props.order)}
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more ..
        </Link>
      </div>
    </React.Fragment>
  );
}