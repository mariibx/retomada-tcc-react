import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page">

      <section className="card">

        <h1 className="titulo">
          🍎 Smart Carbo
        </h1>

        <p className="subtitulo">
          Tecnologia e Inteligência Artificial para uma alimentação mais saudável.
        </p>

        <div className="secao">

          <h2>Apresentação</h2>

          <p>
            O Smart Carbo é um aplicativo desenvolvido como Trabalho de
            Conclusão de Curso com o objetivo de auxiliar pessoas no
            acompanhamento da alimentação diária através do monitoramento
            de carboidratos, calorias e hábitos alimentares.
          </p>

          <br />

          <p>
            A plataforma utilizará Inteligência Artificial para reconhecer
            alimentos por imagem, estimar informações nutricionais e
            oferecer recomendações personalizadas, tornando o controle
            alimentar mais simples, rápido e acessível.
          </p>

        </div>

        <div className="grid">

          <div className="box">

            <h3>🤖 Inteligência Artificial</h3>

            <p>
              Reconhecimento automático de alimentos através de fotografias.
            </p>

          </div>

          <div className="box">

            <h3>🥗 Alimentação Saudável</h3>

            <p>
              Auxílio no controle de carboidratos, calorias e hábitos
              alimentares.
            </p>

          </div>

          <div className="box">

            <h3>📊 Acompanhamento</h3>

            <p>
              Histórico, gráficos e evolução do desempenho alimentar.
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