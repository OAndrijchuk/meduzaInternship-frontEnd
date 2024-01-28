import React from 'react'
import { ButtonsContainer } from './ControlButtons.styled'
import FAButton from './FAButton/FAButton'
import { SendAndArchive, Edit, Delete } from '@mui/icons-material';
import { FunctionType } from '@/Types';

type Props = {
    remove: FunctionType;
    edit: FunctionType;
    saveChanges: FunctionType;
    isEdit: boolean; 
}

const ControlButtons = ({remove, edit, saveChanges, isEdit }: Props) => {
  return (
    <ButtonsContainer>
          <FAButton onClick={remove} icon={<Delete />} helpText='Remove' colorBG='error'/>
          {isEdit
            ? <FAButton onClick={edit} icon={<Edit />} helpText='Edit params'/>
            : <FAButton onClick={saveChanges} icon={<SendAndArchive />} helpText='Save&send changes'/>
          }
        
      </ButtonsContainer>
  )
}

export default ControlButtons