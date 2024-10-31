import './Header.css';
import React, { useState } from 'react';

function Header(){
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubscribe, setOpenSubiscribe] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const openModalSubscribe = () => setOpenSubiscribe(true);
  const closeModalSubscribe = () => setOpenSubiscribe(false); // Corrigido aqui


  return(
    <>
      <div className="header">
        <div className="header-menu">
          <h1>NewsExplorer</h1>
          <div className="header-menu__button">
            <h1 className='title-header'>Home</h1>
            <button className='button-enter' onClick={openModal}>Entrar</button>
          </div>
        </div>
        <div className='content-header'>
          <div className='content-header_title'>
            <h1>O que está</h1>
            <h1>acontecendo no mundo?</h1>
            <p>Encontre as últimas notícias sobre qualquer tema e salve elas em sua conta pessoal</p>
            <div className='content-header_button'>
              <input type='text' placeholder='Inserir tema'/>
              <button className='btn-search'>Procurar</button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <button className="close-button" onClick={closeModal}>
              &times;
          </button>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className='modal-content_inputs'>
              <h2>Entrar</h2>
              <p>E-mail</p>
              <input type="text" placeholder="Insira seu e-mail:" className="input-field" />
              <p>Senha</p>
              <input type="password" placeholder="Insira sua senha" className="input-field" />
              <button className="submit-button" onClick={closeModal}>
                Entrar
              </button>
              <p className='modal-content_signup'>
                ou <a href='#' onClick={(e) => { e.preventDefault(); openModalSubscribe();  closeModal();}}>Inscreva-se</a>
              </p>
            </div>
          </div>
        </div>
      )}

      {isOpenSubscribe && (
        <div className="modal-overlay" onClick={closeModalSubscribe}>
          <button className="close-button" onClick={closeModalSubscribe}>
              &times;
          </button>
          <div className="modal-content modal-content_subscribe" onClick={(e) => e.stopPropagation()}>
            <div className='modal-content_inputs'>
              <h2>Inscreva-se</h2>
              <p>E-mail</p>
              <input type="text" placeholder="Insira seu e-mail:" className="input-field" />
              <p>Senha</p>
              <input type="password" placeholder="Insira sua senha:" className="input-field" />
              <p>Nome de usuário:</p>
              <input type="password" placeholder="Insira seu nome de usuário:" className="input-field" />
              <button className="submit-button" onClick={closeModalSubscribe}>
                Entrar
              </button>
              <p className='modal-content_signup'>
                ou <a href='#' onClick={(e) => e.preventDefault()}>Inscreva-se</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
