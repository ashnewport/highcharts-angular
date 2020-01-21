declare var require: any;

import { Component } from '@angular/core';

// load Highcharts core
import * as Highcharts from 'highcharts/highcharts.src';

// load proj4 to support lat/long
import * as proj4 from 'proj4';

// load map module
import MapModule from 'highcharts/modules/map';

// load map file
const mapWorld = require('@highcharts/map-collection/custom/world.geo.json');

// init map module
MapModule(Highcharts);

// add proj4 to window, so Highcharts will be able to find it
(Highcharts.win as any).proj4 = proj4;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  Highcharts = Highcharts;
  chartMap: Highcharts.Options = {
    chart: {
      map: mapWorld,
    },
    title: {
      text: 'Highmaps basic demo',
    },
    subtitle: {
      text:
        'Source map: <a href="http://code.highcharts.com/mapdata/custom/world.js">World, Miller projection, medium resolution</a>',
    },
    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
      },
    },
    series: [
      {
        // Specify points using lat/lon
        type: 'mappoint',
        name: 'UK cities',
        color: 'tomato',
        data: [
          {
            name: 'London',
            lat: 51.507222,
            lon: -0.1275,
          },
          {
            name: 'Birmingham',
            lat: 52.483056,
            lon: -1.893611,
          },
        ],
      },
      {
        zIndex: -1,
        showInLegend: false,
        states: {
          hover: {
            color: '#BADA55',
          },
        },
        dataLabels: {
          enabled: false,
        },
      } as Highcharts.SeriesMapOptions,
    ],
  };
}
