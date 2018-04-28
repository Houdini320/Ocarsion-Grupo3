
export enum EstadoCoche {BUENO, MALO}

export class Coche {
	
	public marca:string;
	public modelo:string;
	public fecha_modelo:Date;
	public fecha_venta:Date;
	public precio:number;	
	public foto:string;
	public estado:EstadoCoche;
	
	constructor(marca:string,modelo:string,fecha_modelo:Date,precio:number,foto:string)
	{
		this.marca=marca;
		this.modelo=modelo;
		this.fecha_modelo=fecha_modelo;
		this.precio=precio;
		this.foto=foto;
	}
	
	public getPVP():number{
		return this.precio*1.21;
	}
	
	public rebajar(){
		this.precio*=0.90;
	}
}