import { CiDeliveryTruck } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";


function Benefits() {
    return (
    <div className="container-benefits">
        <div className="benefits">
            <div className="benefit">
                <div className="icon">
                <p><CiDeliveryTruck /></p>
            </div>
            <div className="text">
                <h1>Frete grátis</h1>
                <p>Acima de R$ 100 para todo o Brasil</p>
            </div>
            </div>
            <div className="benefit">
                <div className="icon">
                    <p><SlRefresh /></p>
                </div>
                <div className="text">
                    <h1>Troca Fácil</h1>
                    <p>Até 7 dias para trocar ou devolver</p>
                </div>
            </div>
             <div className="benefit">
                <div className="icon">
                    <p><GoShieldCheck /></p>
                </div>
                <div className="text">
                    <h1>Compra segura</h1>
                    <p>Seus dados protegidos sempre</p>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Benefits;