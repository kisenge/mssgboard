import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const style = {

  centre: {
  position: 'absolute', /* Position the element absolutely */
 top: '50%', /* Align the element vertically at the center */
 left: '50%', /* Align the element horizontally at the center */
  },


};





export default function PopOverComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        
        >

        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>

      </Popover>

    </div>
  );
}
