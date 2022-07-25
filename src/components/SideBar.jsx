import React from 'react';
import image from '../assets/images/logo_teapothouse.png';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './CategoriesInDb';
import LastProductInDb from './LastProductInDb';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import Table from './Table';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-info sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="Teapot House"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - TeapotHouse</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Secciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto ingresado</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Table">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/CategoriesInDb">
                    <CategoriesInDb />
                </Route>
                <Route path="/LastProductInDb">
                    <LastProductInDb />
                </Route>
                <Route path="/Table">
                    <Table />
                </Route>
                <Route component={NotFound} />
            </Switch>
        </React.Fragment>
    )
}
export default SideBar;