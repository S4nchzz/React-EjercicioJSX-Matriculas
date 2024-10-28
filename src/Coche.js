function Coche({matricula, marca, modelo, tipo}) {
    return (
        <div className="StyledTextComponent">{matricula} - {modelo} {marca} ({tipo})</div>
    )
}

export default Coche;