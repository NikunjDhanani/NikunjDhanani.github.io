import React, { useState } from "react";

const Footer = () => {

    return (
        <>
            <footer>
                <div id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>
                                    &copy;
                                    Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved | This
                                    template is made with <i className="icon-heart4" aria-hidden="true"></i> by <a
                                        href="#" target="_blank">Nikunj dhanani</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;