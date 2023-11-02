import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/users/selectors';
import { TextField } from '@mui/material';
import { setUserName } from '../../redux/users/usersSlice';
import Button from '@mui/material/Button';

const TestName = () => {
      const [value, setValue] = useState('');
  const userName = useSelector(getUserName);
  const dispatch = useDispatch();
  return (
    <><h1>Hallo {userName ? userName : 'Anonym'}!</h1>

        <TextField id="name" label="Set your name" variant="outlined" value={value} onChange={(e) => { setValue(e.target.value) }} />
        <Button type='button' onClick={() => {
          setValue('')
          dispatch(setUserName(value))
        }}>Set name</Button></>
  )
}

export default TestName