import '../Footer/Footer.css'
import Github from '../../images/github.png'
import Linkedin from '../../images/linkedin.png'

function Footer() {
  return(
    <>
    <div className="Footer">
      <p className='Footer-title'>© 2021 Supersite, desenvolvido pela News API</p>
      <div className='Footer-menu'>
        <p>Home</p>
        <p>Praticium</p>
        <img src={Github} alt="Github" className='Footer-menu_github'/>
        <img src={Linkedin} alt="Linkedin" className='Footer-menu_github'/>
      </div>
    </div>
      
    </>
  );
}

export default Footer;