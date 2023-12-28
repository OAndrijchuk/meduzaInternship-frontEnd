import { ButtonGroup, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import { ActionButtonsType } from '@/Types';

type Props = {
  actions: ActionButtonsType;
  id:{ userId?:number, id:number, companyId?:number} ;
}

const ActionButtons = ({actions:{ remove, accept, reject, add}, id}: Props) => {
  return (
      <>
          <ButtonGroup variant="text" size="medium" color='info' sx={{ marginLeft: 'auto', marginRight: '60px' }}>
              {remove && <Tooltip title={'Delete'} placement="top" arrow>
                <IconButton onClick={()=>remove(id)}>
                <DeleteIcon color='error'/>
                </IconButton>
              </Tooltip>}

              {accept && <Tooltip title={'Accept'} placement="top" arrow>
                <IconButton onClick={()=>accept(id)} >
                  <DoneIcon color='success' />
                </IconButton>
              </Tooltip>}
              
              {reject && <Tooltip title={'Reject'} placement="top" arrow>
                <IconButton onClick={()=>reject(id)}>
                  <ClearIcon color='error' />
                </IconButton>
              </Tooltip>}
              
             {add && <Tooltip title={'Add'} placement="top" arrow>
                <IconButton onClick={()=>add(id)}>
                  <AddIcon color='info'/>
                </IconButton>
              </Tooltip>}

        </ButtonGroup></>
  )
}

export default ActionButtons