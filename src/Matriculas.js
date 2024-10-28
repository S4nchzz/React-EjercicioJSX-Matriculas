import Coche from "./Coche";

function Matriculas() {
    const matriculas = [
        { Matricula: '1425BTY', Marca: 'Peugeot', Modelo: '3008', Tipo: 'híbrido' },
        { Matricula: '1762MNY', Marca: 'Mercedes', Modelo: 'EQS', Tipo: 'Diesel' },
        { Matricula: '9882TPK', Marca: 'Renault', Modelo: '4 E-Tech', Tipo: 'Eléctrico' },
        { Matricula: '6634TRV', Marca: 'Volswagen', Modelo: 'Golf', Tipo: 'Gasolina' },
        { Matricula: '2285RPL', Marca: 'Toyota', Modelo: 'RAV4', Tipo: 'híbrido' },
        { Matricula: '1782PRT', Marca: 'Peugeot', Modelo: '5008', Tipo: 'diesel' }
      ];

      return (
        <div>
            {matriculas.map(item => (
                <Coche 
                    key={item.Matricula}
                    matricula={item.Matricula} 
                    marca={item.Marca} 
                    modelo={item.Modelo} 
                    tipo={item.Tipo}
                />
            ))}
        </div>
      )
}

export default Matriculas;