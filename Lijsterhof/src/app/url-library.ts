import { ConfigurationService } from './config';
import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';




    export class URLLibrary {
         device: string = "abc";
         deviceNumber: number;
         attributeNumber: number;
         name: string; 
         urlStop: string = "";
         target: string;


         public getURL(configuration: ConfigurationService) {

             this.target = configuration.targetStart + this.deviceNumber + "/attributes/" + this.attributeNumber + "/value";
             while (this.target.indexOf("/") >= 0) {this.target = this.target.replace("/", "_");}
             return configuration.urlStart + this.target + this.urlStop;
         }


         public postURL(configuration: ConfigurationService, input: string)
         {
             return this.getURL(configuration).replace("_value", "_value*set=" + input);
         }

         public getDatalogURL(configuration: ConfigurationService) {


             return configuration.DatalogAdress + "datalogvalues/" + this.name + "/";
         }

         public getDatalogCountersURL(configuration: ConfigurationService) {


             return configuration.DatalogAdress + "datalogcounters/" + this.name + "/";
         }

         

    }

    class Temperatures extends URLLibrary
    {
        device = "LOGO";
        deviceNumber = 1;
    }
    export class Temp1 extends Temperatures { attributeNumber = 1 };
    export class Temp2 extends Temperatures { attributeNumber = 2 };
    export class Temp3 extends Temperatures { attributeNumber = 3 };
    export class TempBuffer extends Temperatures { attributeNumber = 4 };
    export class Setup1 extends Temperatures { attributeNumber = 5 };
    export class Setup2 extends Temperatures { attributeNumber = 8 };
    export class TempBoilerBS extends Temperatures { attributeNumber = 6 };
    export class TempBoilerT extends Temperatures { attributeNumber = 7 };
    


    class Pumps extends URLLibrary {
        device = "LOGO";
        deviceNumber = 2;
    }
    export class Pump1 extends Pumps { attributeNumber = 1 };
    export class Pump2 extends Pumps { attributeNumber = 2 };
    export class Pump3 extends Pumps { attributeNumber = 3 };
    export class Pump4 extends Pumps { attributeNumber = 4 };


    class Regimes extends URLLibrary {
        device = "LOGO";
        deviceNumber = 3;
    }
    export class PumpMain extends Regimes { attributeNumber = 1 };
    export class OilHeating extends Regimes { attributeNumber = 2 };
    export class OilSelected extends Regimes { attributeNumber = 3 };
    export class WoodHeating extends Regimes { attributeNumber = 4 };
    export class WoodSelected extends Regimes { attributeNumber = 5 };


    class Counters extends URLLibrary {
        device = "LOGO";
        deviceNumber = 4;
    }
    export class Counter_BS_H extends Counters { attributeNumber = 1 };
    export class Counter_BS_M extends Counters { attributeNumber = 2 };
    export class Counter_BS_Tot extends Counters { attributeNumber = 3 };
    export class Counter_T_H extends Counters { attributeNumber = 4 };
    export class Counter_T_M extends Counters { attributeNumber = 5 };
    export class Counter_T_Tot extends Counters { attributeNumber = 6 };
       
    class DayCounters extends URLLibrary {
        device = "LOGO";
        deviceNumber = 5;
    }
    export class DayCounter_BS_H extends DayCounters { attributeNumber = 1 };
    export class DayCounter_BS_M extends DayCounters { attributeNumber = 2 };
    export class DayCounter_BS_Tot extends DayCounters { attributeNumber = 3 };
    export class DayCounter_T_H extends DayCounters { attributeNumber = 4 };
    export class DayCounter_T_M extends DayCounters { attributeNumber = 5 };
    export class DayCounter_T_Tot extends DayCounters { attributeNumber = 6 };

    
    class RegimeInputs extends URLLibrary {
        device = "LOGO";
        deviceNumber = 6;
    }
    export class BS_CV_M extends RegimeInputs { attributeNumber = 1 };
    export class BS_CV_H extends RegimeInputs { attributeNumber = 2 };
    export class BS_WW_M extends RegimeInputs { attributeNumber = 3 };
    export class BS_WW_H extends RegimeInputs { attributeNumber = 4 };
    export class T_CV_M extends RegimeInputs { attributeNumber = 5 };
    export class T_CV_H extends RegimeInputs { attributeNumber = 6 };
    export class T_WW_M extends RegimeInputs { attributeNumber = 7 };
    export class T_WW_H extends RegimeInputs { attributeNumber = 8 };

    
    class ValueLog extends URLLibrary {
        device = "LOGGER";}
    export class Temp1Log extends ValueLog { name = "Temp1" };
    export class Temp2Log extends ValueLog { name = "Temp2" };
    export class Temp3Log extends ValueLog { name = "Temp3" };
    export class TempBLog extends ValueLog { name = "TempB" };
    
    class CounterLog extends URLLibrary {
        device = "LOGGER";
    }
    export class BS_H_Log extends ValueLog { name = "BS_H" };
    export class BS_M_Log extends ValueLog { name = "BS_M" };
    export class BS_TOT_Log extends ValueLog { name = "BS_TOT" };
    export class T_H_Log extends ValueLog { name = "T_H" };
    export class T_M_Log extends ValueLog { name = "T_M" };
    export class T_TOT_Log extends ValueLog { name = "T_TOT" };

