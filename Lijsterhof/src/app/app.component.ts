import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lijsterhof';

  constructor(
    private router: Router,
  ) {}

  private menuItemsArray: any[] = [ 
    {"title":"CV","link":"#",
    "subItems":[
      {"title":"Info","link":"/page01"},
      {"title":"Instellingen","link":"/page02"},
      {"title":"Verbruik","link":"/page03"},
      {"title":"Tommy","link":"/page15"},
      {"title":"Bruno & Sandy","link":"/page15b"},
     ]
    },
    {"title":"CV grafieken","link":"#",
    "subItems":[
      {"title":"Temperatuur (30 min)","link":"/page04"},
      {"title":"Temperatuur (2 uur)","link":"/page05"},
      {"title":"Temperatuur (24 uur)","link":"/page06"},
      {"title":"Verbruik (per uur)","link":"/page07"},
      {"title":"Verbruik (per dag)","link":"/page08"},
     ]
    },
    {"title":"Domotica","link":"#",
    "subItems":[
      {"title":"Info","link":"/page09"},
      {"title":"Gemeenschap ","link":"/page10"},
      {"title":"Bruno & Sandy","link":"/page11"},
      {"title":"Tommy","link":"/page12"},
     ]
    },
    {"title":"Video","link":"#",
    "subItems":[
                {"title":"Oprit Live","link":"/page13"},
                {"title":"Oprit","link":"/page13b"},
                {"title":"Carport Live","link":"/page14"},
                {"title":"Carport","link":"/page14b"},
                {"title":"Living","link":"/page14c"},
               ]
    },
];

private config = {
  animation: "collapse",
/*  offset: {
  top: 30
  },*/
  closeOnCLick: true,
  };

public onMenuClose(){
 console.log("menu closed");
}
public onMenuOpen(){
 console.log("menu Opened");
}
private onItemSelect(item:any){
 //console.log(item);
 this.router.navigateByUrl(JSON.parse(JSON.stringify(item.link)));
}




}
