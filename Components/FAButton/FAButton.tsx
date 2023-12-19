import { Fab, Tooltip } from '@mui/material'
import React, { ReactElement } from 'react'

type Props = {
    onClick:Function;
    icon: ReactElement<any, any>;
    helpText?: string;
    colorBG?: string; //"success" | "error" | "info" | "warning"
}

const FAButton = ({onClick, icon, helpText='', colorBG="primary"}: Props) => {
  return (
     <Tooltip title={helpText} placement="left-start" arrow>
        <Fab color={colorBG}  sx={{marginLeft: 'auto'}} onClick={onClick}>
            {icon}
        </Fab>
    </Tooltip>
  )
}

export default FAButton