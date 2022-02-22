import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import * as singleSpa from 'single-spa';

export default function TabsWrappedLabel(props) {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 'navbar':
        singleSpa.navigateToUrl('/navbar');
        break;
      case 'render-list':
        singleSpa.navigateToUrl('/render-list');
        break;
      case 'add-list':
        singleSpa.navigateToUrl('/add-list');
        break;
      case 'root':
        singleSpa.navigateToUrl('/');
        break;
      case 'menu':
        singleSpa.navigateToUrl('/menu');
        break;

      default:
        singleSpa.navigateToUrl('/');
        break;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
        <Tab value="menu" label={props.name} wrapped />
        <Tab value="navbar" label="navbar" />
        <Tab value="root" label="root" />
        <Tab value="render-list" label="render-list" />
        <Tab value="add-list" label="add-list" />
      </Tabs>
    </Box>
  );
}
