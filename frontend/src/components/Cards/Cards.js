import './Cards.css';
import Dog from '../../images/dog.png'
import Save from '../../images/save.png'

function Cards() {
  return(
    <div className='cards'>
      <div className='content-cards'>
        <h1>Procurar resultados</h1>
        <div className='content'>
          <div className='content-cards_text'>
            <div className='content-cards-save'>
              <img src={Save} alt="Cachorro" className='save'/>
            </div>
            <img src={Dog} alt="Cachorro" className='dog'/>
            <div className='content-text'>
              <p className='content-text_gray'>4 de novembro de 2020</p>
              <h3>Todo mundo precisa de um ''Lugar Especial para Sentar" especial na naturezaza</h3>
              <p>Desde que li o influente livro de Richard Louv, "O Último Filho na Floresta", a 
                ideia de ter um "lugar para sentar" especial me pegou de jeito. This advice, which Louv attributes to natureza...</p>
              <p className='content-text_gray'>treehugger</p>
            </div>
          </div>
        </div>
        <div className='card-button'>
          <button className='show-more'>Mostrar mais</button>
        </div>
      </div>   
    </div>
  );
}

export default Cards;