import {Link} from "react-router-dom"
import './Footer.css'

export const Footer = ()=>  {

  return (
    <>
        <footer className="footer">
            <div>
                <Link className="links" to = "/"><p className="logo">🎬Blockflix</p></Link>
            </div>      
        </footer>
    </>
  )
}
