import React from 'react';
import GridLayout from 'react-grid-layout';

// imports
import WeatherWidget from '../widgets/weatherWidget';
import NewsWidget from '../widgets/newsWidget';

function HomePage() {
  const layout = [
    {i: 'a', x: 0, y: 0, w: 0, h: 0, static: true},
    {i: 'b', x: 1, y: 0, w: 0, h: 0, static: true},
    {i: 'c', x: 2, y: 0, w: 0, h: 0, static: true},
    {i: 'd', x: 0, y: 2, w: 0, h: 0, static: true},
    {i: 'e', x: 1, y: 2, w: 0, h: 0, static: true},
    {i: 'f', x: 2, y: 2, w: 0, h: 0, static: true}
  ];
  return (
    <div className="container-fluid"> 
      <h1>
        Good Day, Name
      </h1>
      <GridLayout className="layout" layout={layout} cols={3} rowHeight={125} width={3000}>
        <div key="a"><WeatherWidget /></div>
        <div key="b"><NewsWidget /></div>
        <div key="c"><WeatherWidget /></div>
        <div key="d"><WeatherWidget /></div>
        <div key="e"><WeatherWidget /></div>
        <div key="f"><WeatherWidget /></div>

      </GridLayout>
    </div>
  );
}

export default HomePage;