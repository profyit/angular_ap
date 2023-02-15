import { MenuItem } from 'primeng/api';
import { Injectable } from "@angular/core";

const MENU_ITEMS  =[
    {
    label: ' Test',
    icon:'pi pi-fw pi-file',
    items: [
      
        {
            label: 'Contact US',
            icon:'pi pi-send',
            routerLink: ['/ContactUs']
        },
       
    ]
    },
    {
    label: 'Another Tree Menu',
    icon:'pi pi-fw pi-pencil',
    items: [
        {
            label: 'sub Menu',
            icon:'pi pi-sliders-h',
            routerLink: ['/secondtest']
        },
      
    ]
    },
    {
    label: 'Third Tree Menu',
    icon:'pi pi-fw pi-user',
    items: [
        {
            label: 'sub Menu',
            icon:'pi pi-sliders-h',
            routerLink: ['/thirdtest']
  
        },
        
    ]
    },
   
  ];


@Injectable()
export class MenuItemsData {
  getMenuItem(): MenuItem[] {
    return MENU_ITEMS;
  }
}
