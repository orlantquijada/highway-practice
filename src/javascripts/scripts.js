import Highway from '@dogstudio/highway';
import Fade from './transitions';
import NavHandler from './navHandler';
import FilterHandler from './filterHandler';

const H = new Highway.Core({
  transitions: {
    default: Fade,
  },
});

const navHandler = new NavHandler();
navHandler.load();

const filterHandler = new FilterHandler();
filterHandler.load();
