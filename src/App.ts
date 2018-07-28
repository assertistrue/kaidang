import * as nsProp from "./property/property.interface"
export class App{

    //#region port property
    private _port : number;

    /**
     * Port property
     */
    get port():number { return this._port; }
    protected setPort(val:number):number {return this._port = val;}
    //#endregion


    //#region property
    private _p: nsProp.property; 
    public get propName(): string {return this._p.name;} 
    //#endregion

    constructor(){
        this.setPort(3003);
        this._p = <nsProp.property>({name:"this is my name"});
    }

    /**
     * Test display method
     * @returns message with the port
     */
    public PlayMessage():string{
        return `this is from App.PlayMessage:Port:${this.port}`;
    }

}

// export default new App()
