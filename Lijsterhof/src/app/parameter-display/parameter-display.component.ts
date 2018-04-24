import { Component, OnInit, Input  } from '@angular/core';
import { ExportParameter, DisplayType } from '../exportparameter';


@Component({
  selector: 'app-parameter-display',
  templateUrl: './parameter-display.component.html',
  styleUrls: ['./parameter-display.component.css']
})
export class ParameterDisplayComponent implements OnInit {
@Input() exportParameter: ExportParameter;

  constructor() { }

  ngOnInit() {
  }


   isNone(): boolean
{
    return this.exportParameter.displayType == DisplayType.None;
}

 isSwitch():boolean
{
  return this.exportParameter.displayType == DisplayType.Switch
}

 isSlider():boolean
{
  return this.exportParameter.displayType == DisplayType.Slider;
}

 isTextBox():boolean
{
  return this.exportParameter.displayType == DisplayType.Textbox;
}

isNumericBox():boolean
{
  return this.exportParameter.displayType == DisplayType.Numericbox;
}

isGauge():boolean
{
  return this.exportParameter.displayType == DisplayType.Gauge;
}

isPump():boolean
{
  return this.exportParameter.displayType == DisplayType.Pump;
}


}
