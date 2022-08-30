export class Skills {
    id?: number;
    nombreS: string;
    descripcionS: string;
    porcentajeS: string;

    constructor(nombreS: string, descripcionS: string, porcentajeS: string){
        this.nombreS = nombreS;
        this.descripcionS = descripcionS;
        this.porcentajeS = porcentajeS;
    }
}
