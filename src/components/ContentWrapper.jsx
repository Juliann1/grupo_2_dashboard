import React, { useEffect, useState } from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';

function ContentWrapper(){
    const [productsData, setProductsData] = useState()
    const [usersData, setUsersData] = useState()

    useEffect(() => {
        fetch('/api/products')
        .then(res => res.json())
        .then(result => setProductsData(result))

        fetch('/api/users')
        .then(res => res.json())
        .then(result => setUsersData(result))     
    }, [])

    

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop productsData={productsData} usersData={usersData} />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;