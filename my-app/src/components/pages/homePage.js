import React from 'react';
import GridLayout from 'react-grid-layout';

// imports
import Weather from './weather';
import WeatherWidget from '../widgets/weatherWidget';
import NewsWidget from '../widgets/newsWidget';

function HomePage() {
  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
    {i: 'b', x: 1, y: 0, w: 1, h: 2, minW: 2, maxW: 4},
    {i: 'c', x: 2, y: 0, w: 1, h: 2, minW: 2, maxW: 4},
    {i: 'd', x: 0, y: 1, w: 1, h: 2, minW: 2, maxW: 4},
    {i: 'e', x: 1, y: 1, w: 1, h: 2, minW: 2, maxW: 4},
    {i: 'f', x: 2, y: 1, w: 1, h: 2}
  ];
  return (
    <div className="container-fluid"> 
      <h1>
        Good Day, Name
      </h1>
      <GridLayout className="layout" layout={layout} cols={3} rowHeight={125} width={3000}>
        <div key="a"><WeatherWidget /></div>
        <div key="b"><NewsWidget /></div>
        <div key="c">c</div>
        <div key="d">d</div>
        <div key="e">e</div>
        <div key="f">f</div>

      </GridLayout>
    </div>
  );
}

export default HomePage;