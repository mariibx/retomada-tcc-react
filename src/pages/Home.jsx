import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">
      <section className="card">

        <h1 className="titulo">
          🍎 Smart Carbo
        </h1>

        <p className="subtitulo">
          Tecnologia a favor da saúde e do bem-estar.
        </p>

        <div className="secao">

          <h2>Apresentação</h2>

          <p>
            O <strong>Smart Carbo</strong> é um projeto desenvolvido como
            Trabalho de Conclusão de Curso com o objetivo de auxiliar pessoas
            no controle da alimentação por meio do acompanhamento do consumo
            de carboidratos, calorias e hábitos saudáveis.
          </p>

          <br />

          <p>
            A plataforma permitirá registrar refeições, acompanhar metas,
            visualizar gráficos de evolução e receber recomendações
            personalizadas, tornando o controle alimentar mais simples,
            prático e eficiente.
          </p>

        </div>

        <div className="grid">

          <div className="box">
            <h3>🥗 Alimentação Saudável</h3>

            <p>
              Controle do consumo de carboidratos, calorias e registro das
              refeições diárias.
            </p>
          </div>

          <div className="box">
            <h3>📊 Acompanhamento</h3>

            <p>
              Histórico alimentar, gráficos e indicadores para acompanhar
              sua evolução.
            </p>
          </div>

          <div className="box">
            <h3>🎯 Metas Personalizadas</h3>

            <p>
              Defina objetivos de alimentação e acompanhe seu progresso de
              forma prática.
            </p>
          </div>

          <div className="box">
            <h3>🔔 Lembretes</h3>

            <p>
              Receba notificações para registrar refeições, beber água e
              manter uma rotina saudável.
            </p>
          </div>

        </div>

        <Link className="botao" to="/sobre">
          Conheça o Projeto
        </Link>

      </section>
    </div>
  );
}

export default Home;