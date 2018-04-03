import { Component } from '@angular/core';
import {FilterPipe} from './filter-pipe.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String;
  values;
  queryString:String;
  stringValues;
  constructor(){
    this.title='Test filter';
    this.values = [];
    this.stringValues = [];
    this.values=[{"stopId":12893689,"stopName":"C.C Santa Fe"},{"stopId":10959822,"stopName":"Avenida El Poblado, 7 Sur148-7 Sur198"},{"stopId":10959823,"stopName":"Avenida El Poblado, 6 Sur2-6 Sur128"},{"stopId":10959824,"stopName":"Avenida El Poblado, 1a Sur246-1a Sur274"},{"stopId":10959825,"stopName":"Avenida El Poblado, 1 Sur82-1 Sur326"},{"stopId":10959826,"stopName":"Avenida El Poblado, 18-1162"},{"stopId":12893690,"stopName":"Avenida El Poblado"},{"stopId":12893691,"stopName":"Avenida El Poblado"},{"stopId":12893692,"stopName":"Carrera 43a, 11a-80"},{"stopId":23574624,"stopName":"Calle 10 Con Av. El Poblado"},{"stopId":12893694,"stopName":"Carrera 41"},{"stopId":34622366,"stopName":"Calle 10a"},{"stopId":12893695,"stopName":"Carulla De La 10, Poblado"},{"stopId":12893696,"stopName":"Calle 11, 43b20-43b104"},{"stopId":12893697,"stopName":"Calle 11, 43e2-43e100"},{"stopId":12893698,"stopName":"Puente La 10"},{"stopId":33396863,"stopName":"Calle 10, 502-50230"},{"stopId":33396861,"stopName":"Terminal Del Sur"},{"stopId":33396864,"stopName":"Aeropuerto Olaya Herrera"},{"stopId":33396865,"stopName":"Calle 18"},{"stopId":33396866,"stopName":"Calle 24"},{"stopId":33396867,"stopName":"Calle 28"},{"stopId":33396868,"stopName":"Calle 30a"},{"stopId":33396862,"stopName":"Unidad Deportiva De Belen"},{"stopId":27294317,"stopName":"Carrera 66b, 32c-37"},{"stopId":33396869,"stopName":"Calle 32f"},{"stopId":23574611,"stopName":"Cra. 66b #34a-76"},{"stopId":33396870,"stopName":"Circular 1"},{"stopId":33396871,"stopName":"Circular 4"},{"stopId":33396872,"stopName":"San Juan"},{"stopId":33396873,"stopName":"Calle 47"},{"stopId":31189463,"stopName":"Estadio Atanacio Girardot"},{"stopId":33396874,"stopName":"Estadio"},{"stopId":27294305,"stopName":"Avenida Colombia, 767-76271"},{"stopId":33396875,"stopName":"Carrera 79"},{"stopId":33396876,"stopName":"Calle 52b"},{"stopId":33396877,"stopName":"Calle 53"},{"stopId":12893630,"stopName":"Calle 53, 732-73136"},{"stopId":33396878,"stopName":"Calle 52"},{"stopId":27294306,"stopName":"Avenida Colombia, 702-70144"},{"stopId":33396879,"stopName":"Carrera 74"},{"stopId":33396880,"stopName":"Obelisco"},{"stopId":31189470,"stopName":"Carrera 78"},{"stopId":33396881,"stopName":"Canalización"},{"stopId":31189471,"stopName":"Calle45"},{"stopId":31189472,"stopName":"Calle 43"},{"stopId":33278010,"stopName":"Milagros Transv 39b Con 74b"},{"stopId":33278011,"stopName":"Ave Nutivara Con Circular 73"},{"stopId":33396882,"stopName":"Nutibara"},{"stopId":12893639,"stopName":"Avenida 33, 65c1-65c199"},{"stopId":12893641,"stopName":"Avenida 33, 63b73-63b141"},{"stopId":33396883,"stopName":"La 33"},{"stopId":15760302,"stopName":"No Name"},{"stopId":33396884,"stopName":"Carrera 52"},{"stopId":12893643,"stopName":"Calle 37, 461-4695"},{"stopId":7383193,"stopName":"Centro Comercial San Diego"},{"stopId":33396885,"stopName":"San Diego"},{"stopId":33396886,"stopName":"Palmas"},{"stopId":7383196,"stopName":"Cra 38 Con Cll 26"},{"stopId":33396887,"stopName":"Palmas 2"},{"stopId":23574627,"stopName":"Tv. Inferior Con Calle 10"},{"stopId":23574630,"stopName":"Tv. Inferior Con Calle 1b Sur"},{"stopId":23574632,"stopName":"Tv. Inferior Con Loma Los Balsos"},{"stopId":23574634,"stopName":"Tv. Inferior Con Dg. 32b"},{"stopId":23574577,"stopName":"No Name"},{"stopId":23574636,"stopName":"Tv. Superior Con Loma Los Balsos"},{"stopId":23574637,"stopName":"Tv. Superior Con Calle 7sur"}];
    for(let i=0;i<this.values.length;i++){
      this.stringValues.push(JSON.stringify(this.values[i]).toLowerCase());
    }
  }
}
