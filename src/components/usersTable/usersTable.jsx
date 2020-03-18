import React from 'react';
import PropTypes from 'prop-types';

export const UsersTable = ({ users }) => {
  
  return (
    <div>
      Wow. Such Table. Much Data.
    </div>
    // <Table>
    //   <TableHeader>
    //     <TableRow>
    //       <TableCell>Name</TableCell>
    //       <TableCell>Email</TableCell>
    //     </TableRow>
    //   </TableHeader>
    //   <TableBody>
    //     {users.map((user, i) => {
    //       return (
    //         <TableRow key={i}>
    //           <TableCell>{user.name}</TableCell>
    //           <TableCell>{user.email}</TableCell>
    //         </TableRow>
    //       )
    //     })}

    //   </TableBody>
    // </Table>
  )
}

UsersTable.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string
    })
  )
}
