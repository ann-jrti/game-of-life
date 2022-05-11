import React from 'react';
import { Modal, Button, Box, Typography } from '@mui/material/';
import { presets } from '../../patterns';
import { PresetCard } from './PresetCard';

export const Presets = () => {
  console.log(presets);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'scroll',
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderPresets = (): JSX.Element[] => {
    return presets.map((preset) => {
      return (
        <PresetCard
          key={Math.random()}
          name={preset.name}
          img={preset.url}
        ></PresetCard>
      );
    });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Use a preset</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Patterns
          </Typography>
          {renderPresets()}
        </Box>
      </Modal>
    </div>
  );
};
