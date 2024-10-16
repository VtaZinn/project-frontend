import './Header.css';

function Header(){
  return(
    <>
      <div className="header">
        <div className="header-menu">
          <h1>NewsExplorer</h1>
          <div className="header-menu__button">
            <h1 className='title-header'>Home</h1>
            <button className='button-enter'>Entrar</button>
          </div>
        </div>
        <div className='content-header'>
          <div className='content-header_title'>
            <h1>O que está</h1>
            <h1>acontecendo no mundo?</h1>
            <p>Encontre as últimas notícias sobre qualquer tema e salve elas em sua conta pessoal</p>
            <div className='content-header_button'>
              <input type='text' placeholder='Inserir tema'/>
              <button>Procurar</button>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Header;