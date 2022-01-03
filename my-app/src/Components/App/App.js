import '../../index.css';
import React from 'react';
import { useHistory, Route, Switch, Redirect } from 'react-router-dom';
import * as api from '../../utils/api';
import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';
import About from '../About/About';

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isWeather, setIsWeather] = React.useState(false);
  const [isTitle, setIsTitle] = React.useState(true);
  const [isLinkName, setIsLinkName] = React.useState('Map');
  const [isLink, setIsLink] = React.useState('/map');
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main isLoading={isLoading} isWeather={isWeather} isTitle={isTitle} />
        </Route>
        <Route path='/map'>
          <Map isLoading={isLoading} />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}
