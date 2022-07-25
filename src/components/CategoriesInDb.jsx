import React, { useState, useEffect } from "react";

function GenresInDb() {
    const [categories, setCategories] = useState()
    useEffect(() => {
        fetch('/api/products')
        .then(res => res.json())
        .then(result => setCategories({
            countByCategory: Object.keys(result.countByCategory)
        }))    
    }, [])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">
                        Categorías
                    </h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        {categories?.countByCategory.map((e, i) => {
                            return (
                                <div className="col-lg-6 mb-4" key={i}>
                                    <div className="card bg-info text-white shadow">
                                        <div className="card-body">{e.toUpperCase()}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GenresInDb;
