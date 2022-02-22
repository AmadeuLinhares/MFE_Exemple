import { BrowserRouter } from 'react-router-dom';
import { Routers } from './routes';

export default function Root(props) {
  return (
    <BrowserRouter basename="navbar">
      <Routers />
    </BrowserRouter>
  );
}
