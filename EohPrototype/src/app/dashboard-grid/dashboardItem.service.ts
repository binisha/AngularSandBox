import {DashboardItem} from './dashboardItem.model'; 

export class DashboardItemService{
    
    getDashboardItems():DashboardItem[] {
              
         let menu: DashboardItem[] = [
                    // new DashboardItem('EOH', 'This is a link to EOH Module ', {top: 2, left: 1, height: 1, width: 1} ),
                    // new DashboardItem('BM', 'This is a link to Benchmark',{top: 2, left: 2, height: 1, width: 1} ),      
                    //  new DashboardItem('AAA', 'This is simply a Dummy module', {top: 2, left: 4, height: 1, width: 1} )
                    new DashboardItem('EOH', 'This is a link to EOH Module ' ),
                    new DashboardItem('BM', 'This is a link to Benchmark' ),      
                     new DashboardItem('AAA', 'This is simply a Dummy module' )

                  ];


         return menu;
    } 
}