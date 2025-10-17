function navbar() {
  return (
    <nav className="navbar">
      <h1>Agendamento de Consultas</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/agendar">Agendar Consulta</a>
        <a href="/consultas">Minhas Consultas</a>
      </div>
    </nav>
  );

}

export default navbar;