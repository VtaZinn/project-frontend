import '../Content/Content.css'
import Girl from '../../images/girl.png'

function Content() {
  return(
    <>
      <div className='content'>
        <img src={Girl} alt="Garota meditando" />
        <div className='content-text'>
          <h1>Sobre o autor</h1>
          <p>Esse bloco descreve o autor do projeto. Aqui você deve indicar seu nome, o que você faz e quais tecnologias de desenvolvedor você conhece</p>
          <p>Você também pode falar sobre sua experiência com o Practicum, o que aprendeu lá e como pode ajudar clientes em potencial.</p>
        </div>
      </div>
    </>
  );
}

export default Content;