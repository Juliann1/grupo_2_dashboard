import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRow from './ContentRow';
import Table from './Table';

function ContentRowTop({productsData, usersData}){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Dashboard - TeapotHouse</h1>
					</div>
				
					{/*<!-- Content Row -->*/}
					<ContentRow productsData={productsData} usersData={usersData}/>
					<ContentRowCenter />
					<Table productsData={productsData} />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;