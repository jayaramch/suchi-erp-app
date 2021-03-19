import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsComponent} from './charts.component';
import {AreaChartComponent} from './area-chart/area-chart.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {BasicradarChartComponent} from './basicradar-chart/basicradar-chart.component';
import {CandlestickChartComponent} from './candlestick-chart/candlestick-chart.component';
import {ColumnChartComponent} from './column-chart/column-chart.component';
import {ColumnLineChartComponent} from './column-line-chart/column-line-chart.component';
import {HeatmapChartComponent} from './heatmap-chart/heatmap-chart.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {MinbarchartComponent} from './minbarchart/minbarchart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';
import {RadialbarChartComponent} from './radialbar-chart/radialbar-chart.component';
import {SparklinesComponent} from './sparklines/sparklines.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import {CountToModule} from 'angular-count-to';
import {ElementsModule} from '../elements/elements.module';
import {InterceptorsModule} from '../../shared/interceptors/interceptors.module';
const COMPONENTS = [
  ChartsComponent,
  AreaChartComponent,
  BarChartComponent,
  BasicradarChartComponent,
  CandlestickChartComponent,
  ColumnChartComponent,
  ColumnLineChartComponent,
  HeatmapChartComponent,
  LineChartComponent,
  MinbarchartComponent,
  PieChartComponent,
  RadarChartComponent,
  RadialbarChartComponent,
  SparklinesComponent
];

@NgModule({
  declarations: COMPONENTS,
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ElementsModule,
    NgApexchartsModule,
    CountToModule,
    InterceptorsModule
  ],
  exports: COMPONENTS,
})
export class ChartsModule {
}
