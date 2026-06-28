function Sobre() {
  return (
    <div className="page">

      <section className="card">

        <h1 className="titulo">
          Sobre o Projeto
        </h1>

        <p className="subtitulo">
          Conheça a proposta do Smart Carbo.
        </p>

        <div className="secao">

          <h2>📌 Tema</h2>

          <p>
            Desenvolvimento de um aplicativo inteligente para monitoramento
            alimentar utilizando Inteligência Artificial, com foco no
            acompanhamento da ingestão de carboidratos e na promoção de
            hábitos saudáveis.
          </p>

        </div>

        <div className="secao">

          <h2>🎯 Objetivo Geral</h2>

          <p>
            Desenvolver uma plataforma capaz de auxiliar os usuários na
            organização da alimentação diária, oferecendo informações
            nutricionais, registro de refeições, acompanhamento da evolução
            e recomendações inteligentes baseadas em seus hábitos.
          </p>

        </div>

        <div className="grid">

          <div className="box">

            <h3>Problema</h3>

            <p>
              Muitas pessoas possuem dificuldade para controlar a alimentação
              e calcular corretamente a quantidade de carboidratos consumida.
            </p>

          </div>

          <div className="box">

            <h3>Solução</h3>

            <p>
              Utilizar Inteligência Artificial para identificar alimentos e
              fornecer informações nutricionais automaticamente.
            </p>

          </div>

          <div className="box">

            <h3>Público-Alvo</h3>

            <p>
              Pessoas interessadas em alimentação saudável, praticantes de
              atividades físicas e usuários que desejam acompanhar sua dieta
              de forma simples e prática.
            </p>

          </div>

        </div>

        <div className="secao">

          <h2>💡 Diferenciais</h2>

          <ul className="lista">

            <li>📸 Reconhecimento de alimentos por fotografia.</li>

            <li>🤖 Inteligência Artificial para sugestões nutricionais.</li>

            <li>📈 Gráficos de evolução alimentar.</li>

            <li>🥗 Controle diário de carboidratos e calorias.</li>

            <li>🎯 Acompanhamento de metas e hábitos saudáveis.</li>

            <li>📱 Interface moderna, intuitiva e acessível.</li>

          </ul>

        </div>

      </section>

    </div>
  );
}

export default Sobre;