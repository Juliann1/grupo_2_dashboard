import React, { useEffect, useState } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDb = {
    title: 'Products in Data Base',
    color: 'primary', 
    quantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Categories awards --> */

let categoriesInDb = {
    title:'Categories in Data Base', 
    color:'success', 
    quantity: '79',
    icon:'fa-award'
}

/* <!-- Users quantity --> */

let usersInDb = {
    title:'Users in Data Base' ,
    color:'warning',
    quantity:'49',
    icon:'fa-user-check'
}

let cartProps = [productsInDb, usersInDb, categoriesInDb];

function ContentRow({productsData, usersData}){

    const [data, setData] = useState()
    const [cards, setCards] = useState()
  
    const urls = ['/api/products', '/api/users']
    useEffect(() => {
        Promise.all(urls.map(url =>
            fetch(url)
            .then(resp => resp.json())
        )).then(result => setData(result))
        
        if (data) {
            const { count, countByCategory } = data[0]
            const categoryLen = Object.keys(countByCategory).length
            const quantities = [count, data[1].count, categoryLen]
           
            setCards(cartProps.map((e, i) => {
                return {
                    ...e, 
                    quantity: quantities[i]
                }
            }))
        }
        
    }, [productsData, usersData]) 

    return (
    
        <div className="row">
            
            {cards?.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRow;