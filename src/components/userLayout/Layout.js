import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../commonPages/Footer";
import Navbar from "../commonPages/Navbar";
import $ from 'jquery';
import 'bootstrap';

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;