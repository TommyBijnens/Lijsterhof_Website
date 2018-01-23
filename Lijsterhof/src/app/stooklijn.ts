import { Point } from "@progress/kendo-drawing/dist/es/geometry";

export class Stooklijn
{
   private min: Point;
   private max: Point;

   public name: string = "CV stooklijn";

   public setMax(xValue: number, yValue)
   {
    this.max.setX(xValue);
    this.max.setY(yValue);
   }
   public setMin(xValue: number, yValue)
   {
    this.min.setX(xValue);
    this.min.setY(yValue);
   }
   

   public getData()
   {
    return [40,40,60,60];
   }





}