import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchUsersAsync } from './dashboardSlice';
import UserList from './user/UserList';
import UserForm from './user/UserForm';

function Dashboard() {
  const dispatch = useDispatch();

  const [isUserFormVisible, setIsUserFormVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchUsersAsync());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className='mb-5'>Dashboard</h1>
      {isUserFormVisible ? (
        <UserForm setIsUserFormVisible={setIsUserFormVisible} />
      ) : (
        <UserList setIsUserFormVisible={setIsUserFormVisible} />
      )}
    </>
  );
}

export default Dashboard;
