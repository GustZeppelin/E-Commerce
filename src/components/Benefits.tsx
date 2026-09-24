import { CiDeliveryTruck } from "react-icons/ci";
import { SlRefresh } from "react-icons/sl";
import { GoShieldCheck } from "react-icons/go";


function Benefits() {
    return (
    <div className="container-benefits">
        <div className="benefits">
            <div className="benefit">
                <div className="icon">
                <CiDeliveryTruck />
            </div>
            <div className="text">
                <h1>Frete grátis</h1>
                <p>Acima de R$ 100 para todo o Brasil</p>
            </div>
            </div>
            <div className="benefit">
                <div className="icon">
                    <SlRefresh />
                </div>
                <div className="text">
                    <h1>Troca Fácil</h1>
                    <p>Até 7 dias para trocar ou devolver</p>
                </div>
            </div>
             <div className="benefit">
                <div className="icon">
                    <GoShieldCheck />
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