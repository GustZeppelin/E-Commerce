import '../css/footer.css' 
import { CiLock } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";

function Footer() {
    return (
        <div className="container-footer">
            <div className="footer">
                <div className="icon-footer">
                    <p><CiLock /></p>
                </div>
                <div className="title-footer">
                    <h1>Site 100% seguro</h1>
                    <p>Seus dados estão protegidos</p>
                </div>
                <div className="icon-footer">
                    <p><CiCreditCard2 /></p>
                </div>
                <div className="title-footer">
                    <h1>Parcele suas compras</h1>
                    <p>Em até 12x no cartão</p>
                </div>
                <div className="icon-footer">
                    <p><CiBellOn /></p>
                </div>
                <div className="title-footer">
                    <h1>Atendimento humanizado</h1>
                    <p>Seg à Sex das 8h às 18h</p>
                </div>
                <div className="icon-footer">
                    <p><IoShieldOutline /></p>
                </div>
                <div className="title-footer">
                    <h1>Satisfação garantida</h1>
                    <p>30 dias de garantia</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;