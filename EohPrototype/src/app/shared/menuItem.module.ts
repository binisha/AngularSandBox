export class MenuItem {
    public text: string;
    public description: string;
    public items? : MenuItem []=[] ;
  
    constructor(name: string, desc: string) {
      this.text = name;
      this.description = desc;
 
    }

    addChildren(child: MenuItem) {
        this.items.push(child);

    }
  }
  