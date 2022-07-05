export class Personn{
      constructor(public name:string,public age:number){ 
      }
      public getName():string{
       return this.name;
      }
      public setName(name:string):void{
         this.name=name;
      }
}

