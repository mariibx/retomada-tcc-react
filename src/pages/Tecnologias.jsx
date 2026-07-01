function Tecnologias() {
  return (
    <div className="page">
      <section className="card">

        <h1 className="titulo">
          Tecnologias Utilizadas
        </h1>

        <p className="subtitulo">
          Conheça as principais tecnologias que serão utilizadas no desenvolvimento do Smart Carbo.
        </p>

        <div className="grid">

          <div className="box">
            <h3>⚛️ ReactJS</h3>
            <p>
              Framework JavaScript utilizado para desenvolver a aplicação Web com uma interface moderna e dinâmica.
            </p>
          </div>

          <div className="box">
            <h3>📱 React Native</h3>
            <p>
              Desenvolvimento do aplicativo mobile para Android e iOS utilizando uma única base de código.
            </p>
          </div>

          <div className="box">
            <h3>☕ Spring Boot</h3>
            <p>
              Responsável pelo desenvolvimento da API, regras de negócio e integração entre sistema e banco de dados.
            </p>
          </div>

          <div className="box">
            <h3>🗄️ SQL Server</h3>
            <p>
              Banco de dados utilizado para armazenar usuários, refeições, histórico alimentar e demais informações.
            </p>
          </div>

          <div className="box">
            <h3>🤖 Inteligência Artificial</h3>
            <p>
              Utilizada para fornecer sugestões nutricionais personalizadas.
            </p>
          </div>

          <div className="box">
            <h3>📊 Chart.js</h3>
            <p>
              Biblioteca responsável pela criação de gráficos e relatórios de evolução do usuário.
            </p>
          </div>

          <div className="box">
            <h3>🔐 JWT</h3>
            <p>
              Sistema de autenticação utilizado para garantir segurança no acesso dos usuários.
            </p>
          </div>

          <div className="box">
            <h3>🌐 APIs REST</h3>
            <p>
              Comunicação entre o frontend, backend e serviços externos utilizados pelo sistema.
            </p>
          </div>

        </div>

      </section>
    </div>
  );
}

export default Tecnologias;