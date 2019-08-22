import {MenuItem} from '../shared/menuItem.module'; 

export class MenuItemService{
    
       getMenu():MenuItem[] {
        let mi: MenuItem   = new MenuItem('DevExtreme', 'This is simply a DevExtreme');
            mi.addChildren(new MenuItem('Table', 'This is simply a DevExtreme'));
            mi.addChildren(new MenuItem('Chart', 'This is simply a DevExtreme'));
               
            let menu: MenuItem[] = [
                       new MenuItem('Map', 'This is simply a  map '),
                       mi,      
                        new MenuItem('Benchmark', 'This is simply a DevExtreme')
                     ];


            return menu;
       } 

       getNavMenu():MenuItem[] {
        let mi: MenuItem   = new MenuItem('DevExtreme', 'This is simply a DevExtreme');
            mi.addChildren(new MenuItem('Table', 'This is simply a DevExtreme'));
            mi.addChildren(new MenuItem('Chart', 'This is simply a DevExtreme'));
               
            let menu: MenuItem[] = [
                       new MenuItem('Map', 'This is simply a  map '),
                       mi,      
                        new MenuItem('Benchmark', 'This is simply a DevExtreme')
                     ];


            return menu;
       } 

}