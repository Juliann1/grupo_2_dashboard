import React, { useEffect, useState } from "react";
import ChartRow from "./ChartRow";

function Chart({productsData}) {
    const [products, setProducts] = useState()

    useEffect(() => {
        if (productsData) {
            setProducts(productsData)
        } else {
            fetch('/api/products')
            .then(res => res.json())
            .then(result => {
                if (result) setProducts(result)
            })
        }

    }, [productsData])

    return ( 
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table
                        className="table table-bordered"
                        id="dataTable"
                        width="100%"
                        cellSpacing="0"
                    >
                        <thead>
                            <tr> 
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>Precio</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {products?.products.map((row, i) => {
                                return <ChartRow {...row} key={i} />;
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Chart;
