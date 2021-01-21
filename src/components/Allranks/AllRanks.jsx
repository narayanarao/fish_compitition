import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow'
import Aux from '../../hoc/Auxlary';
import Avatar from '@material-ui/core/Avatar';
const columns = [
    { id: 'profile', label: 'Profile', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'points', label: 'Points', minWidth: 170},
    { id: 'ranks',label: 'Ranks',minWidth: 170},
  ];
  
  function createData(profile,name, points, ranks) {
    return {profile,name, points, ranks};
  }
  
  const rows = [
    createData(<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />,'India',  40, 1),
    createData('image.jpg','China',  50, 1),
    createData('image.jpg','Italy',  30, 2),
    createData('image.jpg','United States', 40, 1),
    createData('image.jpg','Canada',  50, 1),
    createData('image.jpg','Australia',  20, 4),
    createData('image.jpg','Germany',  30, 2),
    createData('image.jpg','Ireland',  40, 1),
    createData('image.jpg','Mexico',  50, 1),
    createData('image.jpg','Japan',  10, 5),
    createData('image.jpg','France',  20, 4),
    createData('image.jpg','United Kingdom', 30, 2),
    createData('image.jpg','Russia',  40, 1),
    createData('image.jpg','Nigeria',  50, 1),
    createData('image.jpg','Brazil', 50, 1),
  ];
  const rows1 = [
      {
      id:1,
      profile:'image.jpg',
      name:'raja',
      points:'40',
      rank:'1'
     },
     {
        id:2,
        profile:'image.jpg',
        name:'raja',
        points:'40',
        rank:'1'
    },
    {
        id:3,
        profile:'image.jpg',
        name:'raja',
        points:'40',
        rank:'1'
    },
    {
        id:4,
        profile:'image.jpg',
        name:'raja',
        points:'40',
        rank:'1'
    }


]
  const useStyles = makeStyles({
    root: {
      width: '70%',
      marginLeft:'150px',
      marginTop:'40px'
    },
    container: {
      maxHeight: 440,
    },
  });
 
const AllRanks = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
    <Aux>
     <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          {<TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>}
          <TableBody>
             {rows1.map((column) => {   
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={rows1.id}>
                      <Aux>
                      <TableCell>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                      </TableCell>
                      <TableCell>
                        {column.name}
                      </TableCell>
                      <TableCell>
                        {column.points}
                      </TableCell>
                      <TableCell>
                        {column.rank}
                      </TableCell>
                      </Aux>       
                </TableRow>
              )
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
        </Aux>
    )
}
export default AllRanks;