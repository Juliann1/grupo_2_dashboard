import React from 'react';


function ChartRow({product_name, product_description, category, price}){
   
    return (
                <tr>
                    <td>{product_name}</td>
                    <td>{product_description}</td>
                    <td>{category.category}</td>
                    <td>{price}</td>
                </tr>
            )
    }
    
        

export default ChartRow;