import { Point } from "@progress/kendo-drawing/dist/es/geometry";

export class Stooklijn
{
   public min: Point = new Point(0,60);
   public max: Point = new Point(20,40);
   private cat_min = -5;
   private cat_max = 25;


    

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
    {
        var output: number[] = new Array<number>();
        var n: number = this.cat_min;
    
        while (n <= this.cat_max) {
            if (n <= this.min.x) output.push(this.min.y);
            else if (n >= this.max.x) output.push(this.max.y);
            else output.push(this.CalculateValue(n));
            n++;
        }
        return output;
    }
   }

   public getCategories()
   {
    var output: number[] = new Array<number>();
    var n: number = this.cat_min;

    while (n <= this.cat_max) {
        output.push(n);
        n++;
    }
    return output;
   }

   private CalculateValue(n: number)
   {
       var rc = (this.max.y-this.min.y) / (this.max.x - this.min.x);
       return ((n-this.min.x)*rc)+this.min.y;
   }





}