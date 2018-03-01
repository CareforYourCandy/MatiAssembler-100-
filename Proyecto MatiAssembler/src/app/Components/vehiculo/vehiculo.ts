export class Vehiculo {
    serialMotor;
    modelo;
    ano;
    placa;
    activado;
    marca ;
    vehiculoID; 
    constructor(serialMotor, modelo, ano, placa, activado, marca, vehiculoID) { 
      this.serialMotor = serialMotor;
      this.modelo = modelo;
      this.ano = ano;
      this.placa = placa;
      this.activado = activado;
      this.marca = marca;
      this.vehiculoID = vehiculoID; 
    }
}
