import React, { useEffect, useState } from "react";
import TableRow from "./TableRow";

function ProductDetail() {
  const [lastProduct, setLastProduct] = useState();
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        return fetch(`/api/products/${data.count}`)
          .then((second) => second.json())
          .then((result) => setLastProduct(result));
      })
      .catch((e) => console.log(e));
  }, []);

  if (!lastProduct) {
    return (
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
              <tbody>Cargando...</tbody>
              <tfoot>
                <tr>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
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
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Categoría</th>
                  <th>Precio</th>
                  <th>Tips</th>
                  <th>Envío</th>
                </tr>
              </thead>
              <tbody>
                {
                  <tr>
                    <td>{lastProduct?.id}</td>
                    <td>{lastProduct?.product_name}</td>
                    <td>{lastProduct?.product_description}</td>
                    <td>{lastProduct?.relations[0].category}</td>
                    <td>{lastProduct?.price}</td>
                    <td>{lastProduct?.tip}</td>
                    <td>{lastProduct?.relations[1].shipping}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <img src={`${lastProduct?.images[1]}`} alt="lastProduct-img" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProductDetail;
