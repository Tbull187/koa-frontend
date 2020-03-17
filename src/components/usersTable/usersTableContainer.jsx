import React from 'react';
import axios from 'axios';
import { UsersTable } from './usersTable';

export class UsersTableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  async componentDidMount() {
    const users = await this.fetchUsers();
    this.setState({ users: [...users] });
  }

  fetchUsers = async () => {
    try {
      const res = await axios.get('/users');
      return res.data;
    }
    catch(err) {
      console.log(err);
      return [];
    }
  }

  render() {
    return (
      <div>
        <UsersTable users={this.state.users} />
      </div>
    );
  }
}