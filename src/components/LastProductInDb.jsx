import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

function LastProductInDb(){
    const [lastProduct, setLastProduct] = useState()
    useEffect(() => {
        fetch('/api/products')
        .then(res => res.json())
        .then(data => {
            return fetch(`/api/products/${data.count}`)
            .then(second => second.json())
            .then(result => setLastProduct(result))
        })
       
    }, [])

    if (!lastProduct) {
        return (
            <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto ingresado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        ...Cargando
                    </div>
                    <p></p>
                    <Link className="btn btn-info" to="/ProductDetail">Detalle del producto</Link>
                </div>
            </div>
        </div>
        )
    }

    return( 
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Último producto ingresado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct.firstImage} alt={lastProduct.product_description}/>
                    </div>
                    <p>{lastProduct.product_description}</p>
                    <Link className="btn btn-info" to="/ProductDetail">Detalle del producto</Link>
                </div>
            </div>
        </div>
    )
}

export default LastProductInDb;
