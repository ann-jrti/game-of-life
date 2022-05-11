import { presets } from '../../patterns';
import { Box, Typography, Button } from '@mui/material';

interface Props {
  name: string;
  img: string;
  pattern?: [];
}

const presetsContainer = {
  display: 'inline-block',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const presetStyle = {
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem',

  alignItems: 'center',
};

export const PresetCard = (props: Props) => {
  return (
    <Box sx={presetsContainer}>
      <Button sx={presetStyle}>
        <Typography fontSize="small">{props.name}</Typography>
        <img style={{ width: '150px' }} src={props.img}></img>
      </Button>
    </Box>
  );
};
