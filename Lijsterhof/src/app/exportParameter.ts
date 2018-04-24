import { ExportParameterService } from './export-parameter.service';
import { Stooklijn } from './stooklijn';

export class ExportParameter
{
key: string; 
description: string;
Value: number;
canWrite: boolean;
displayType: DisplayType;

isTrue: boolean;
displayDescription: boolean;

apiGroup: string;

maxValue: number = 25; 
minValue: number = -5;
minorUnit: number = 0.5;
majorUnit: number = 5;


constructor(key: string, group: string, displayDescription: boolean)
{
this.key = key
this.apiGroup = group;

this.displayDescription = displayDescription;
}

public link(exportParameterService: ExportParameterService, linkedStooklijn?: Stooklijn)
{
    exportParameterService.getExportParameter(this.apiGroup,this.key).subscribe((p) =>{
        if (this.displayDescription) this.description = p.description;
        else this.description = "";
        this.Value = p.Value;
        this.displayType = p.displayType;
        this.canWrite = p.canWrite;
        this.checkBoolean();
        if (linkedStooklijn != null) {
            if (p.key.includes("X1")) linkedStooklijn.min.x = p.Value;
            if (p.key.includes("Y1")) linkedStooklijn.min.y = p.Value;
            if (p.key.includes("X2")) linkedStooklijn.max.x = p.Value;
            if (p.key.includes("Y2")) linkedStooklijn.max.y = p.Value;
        };
    })
}


 public checkBoolean()
 {
     this.isTrue = (this.Value == 1);
 }

/* CV */
    static temp1(displayDescription = true): ExportParameter {return new ExportParameter("temp1", "cv", displayDescription)}
    static temp2(displayDescription = true): ExportParameter {return new ExportParameter("temp1", "cv", displayDescription)}
    static temp3(displayDescription = true): ExportParameter {return new ExportParameter("temp1", "cv", displayDescription)}
    static tempBuffer(displayDescription = true): ExportParameter {return new ExportParameter("tempBuffer", "cv", displayDescription)}
    static tempBoilerBS(displayDescription = true): ExportParameter {return new ExportParameter("tempBoilerBS", "cv", displayDescription)}
    static tempBoilerT(displayDescription = true): ExportParameter {return new ExportParameter("tempBoilerT", "cv", displayDescription)}
    static setup1(displayDescription = true): ExportParameter {return new ExportParameter("setup1", "cv", displayDescription)}
    static setup2(displayDescription = true): ExportParameter {return new ExportParameter("setup2", "cv", displayDescription)}

    static pump1(displayDescription = true): ExportParameter {return new ExportParameter("pump1", "cv", displayDescription)}
    static pump2(displayDescription = true): ExportParameter {return new ExportParameter("pump2", "cv", displayDescription)}
    static pump3(displayDescription = true): ExportParameter {return new ExportParameter("pump3", "cv", displayDescription)}
    static pump4(displayDescription = true): ExportParameter {return new ExportParameter("pump4", "cv", displayDescription)}
    static pumpMain(displayDescription = true): ExportParameter {return new ExportParameter("pumpMain", "cv", displayDescription)}

    static oilHeating(displayDescription = true): ExportParameter {return new ExportParameter("oilHeating", "cv", displayDescription)}
    static oilSelected(displayDescription = true): ExportParameter {return new ExportParameter("oilSelected", "cv", displayDescription)}
    static woodHeating(displayDescription = true): ExportParameter {return new ExportParameter("woodHeating", "cv", displayDescription)}
    static woodSelected(displayDescription = true): ExportParameter {return new ExportParameter("woodSelected", "cv", displayDescription)}

    static BS_CV_M(displayDescription = true): ExportParameter {return new ExportParameter("BS_CV_M", "cv", displayDescription)}
    static BS_CV_H(displayDescription = true): ExportParameter {return new ExportParameter("BS_CV_H", "cv", displayDescription)}
    static BS_WW_M(displayDescription = true): ExportParameter {return new ExportParameter("BS_WW_M", "cv", displayDescription)}
    static BS_WW_H(displayDescription = true): ExportParameter {return new ExportParameter("BS_WW_H", "cv", displayDescription)}
    static T_CV_M(displayDescription = true): ExportParameter {return new ExportParameter("T_CV_M", "cv", displayDescription)}
    static T_CV_H(displayDescription = true): ExportParameter {return new ExportParameter("T_CV_H", "cv", displayDescription)}
    static T_WW_M(displayDescription = true): ExportParameter {return new ExportParameter("T_WW_M", "cv", displayDescription)}
    static T_WW_H(displayDescription = true): ExportParameter {return new ExportParameter("T_WW_H", "cv", displayDescription)}

    static counterWoodBS(displayDescription = true): ExportParameter {return new ExportParameter("counterWoodBS", "cv", displayDescription)}
    static counterOilBS(displayDescription = true): ExportParameter {return new ExportParameter("counterOilBS", "cv", displayDescription)}
    static counterTotalBS(displayDescription = true): ExportParameter {return new ExportParameter("counterTotalBS", "cv", displayDescription)}
    static dayCounterWoodBS(displayDescription = true): ExportParameter {return new ExportParameter("dayCounterWoodBS", "cv", displayDescription)}
    static dayCounterOilBS(displayDescription = true): ExportParameter {return new ExportParameter("dayCounterOilBS", "cv", displayDescription)}
    static dayCounterTotalBS(displayDescription = true): ExportParameter {return new ExportParameter("dayCounterTotalBS", "cv", displayDescription)}
    static counterWoodT(displayDescription = true): ExportParameter {return new ExportParameter("counterWoodT", "cv", displayDescription)}
    static counterOilT(displayDescription = true): ExportParameter {return new ExportParameter("counterOilT", "cv", displayDescription)}
    static counterTotalT(displayDescription = true): ExportParameter {return new ExportParameter("counterTotalT", "cv", displayDescription)}
    static dayCounterWoodT(displayDescription = true): ExportParameter {return new ExportParameter("dayCounterWoodT", "cv", displayDescription)}
    static dayCounterOilT(displayDescription = true): ExportParameter {return new ExportParameter("dayCounterOilT", "cv", displayDescription)}
    static dayCounterTotalT(displayDescription = true): ExportParameter {return new ExportParameter("dayCounterTotalT", "cv", displayDescription)}



/* DB */
    static TempWater_X1(displayDescription = true): ExportParameter {return new ExportParameter("TempWater_X1", "db", displayDescription)}
    static TempWater_Y1(displayDescription = true): ExportParameter {return new ExportParameter("TempWater_Y1", "db", displayDescription)}
    static TempWater_X2(displayDescription = true): ExportParameter {return new ExportParameter("TempWater_X2", "db", displayDescription)}
    static TempWater_Y2(displayDescription = true): ExportParameter {return new ExportParameter("TempWater_Y2", "db", displayDescription)}
    static Setup_T1_M_max(displayDescription = true): ExportParameter {return new ExportParameter("Temp_T1_M_max", "db", displayDescription)}
    static Setup_T1_M_min(displayDescription = true): ExportParameter {return new ExportParameter("Temp_T1_M_min", "db", displayDescription)}
    static Setup_T1_H_max(displayDescription = true): ExportParameter {return new ExportParameter("Temp_T1_H_max", "db", displayDescription)}
    static Setup_T1_H_min(displayDescription = true): ExportParameter {return new ExportParameter("Temp_T1_H_min", "db", displayDescription)}
    static Setup_T2_M_max(displayDescription = true): ExportParameter {return new ExportParameter("Temp_T2_M_max", "db", displayDescription)}
    static Setup_T2_M_min(displayDescription = true): ExportParameter {return new ExportParameter("Temp_T2_M_min", "db", displayDescription)}
    static Setup_T2_H_max(displayDescription = true): ExportParameter {return new ExportParameter("Temp_T2_H_max", "db", displayDescription)}
    static Setup_T2_H_min(displayDescription = true): ExportParameter {return new ExportParameter("Temp_T2_H_min", "db", displayDescription)}

/* RPI */
    static RoomTemp_T1(displayDescription = true): ExportParameter {return new ExportParameter("temp1", "rpi", displayDescription)}


}



export enum DisplayType
{
    None,
    Switch,
    Slider,
    Textbox,
    Numericbox,
    Gauge,
    Pump
};