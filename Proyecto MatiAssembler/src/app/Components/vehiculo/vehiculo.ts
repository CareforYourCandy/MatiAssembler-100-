export class Vehiculo {
    serialMotor;
    modelo;
    ano;
    placa;
    activado;
    marca ;
    vehiculoID; 
    fechaRegistro;
    constructor(serialMotor, modelo, ano, placa, activado, marca, vehiculoID, fechaRegistro) { 
      this.serialMotor = serialMotor;
      this.modelo = modelo;
      this.ano = ano;
      this.placa = placa;
      this.activado = activado;
      this.marca = marca;
      this.vehiculoID = vehiculoID; 
      this.fechaRegistro = fechaRegistro;
    }
}
