import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import I from 'immutable';

import {
    getUserInfo
} from '../selectors';


class Header extends Component {
    render(){
        const { auth } = this.props;
        console.log(auth.toJS());
        return (
            <header class="navbar pcoded-header navbar-expand-lg navbar-light">
                <div class="m-header">
                    <a class="mobile-menu" id="mobile-collapse1" href="#!"><span></span></a>
                    <a href="index.html" class="b-brand">
                    <div class="b-bg">
                        <i class="feather icon-trending-up"></i>
                    </div>
                    <span class="b-title">Clash Royal Api Example</span>
                </a>
                </div>
                <a class="mobile-menu" id="mobile-header" href="#!">
                    <i class="feather icon-more-horizontal"></i>
                </a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <li>
                            <div class="dropdown drp-user">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <i class="icon feather icon-settings"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right profile-notification">
                                    <div class="pro-head">
                                        <img src="assets/images/user/avatar-1.jpg" class="img-radius" alt="User-Profile-Image" />
                                        <span>John Doe</span>
                                        <a href="auth-signin.html" class="dud-logout" title="Logout">
                                            <i class="feather icon-log-out"></i>
                                        </a>
                                    </div>
                                    <ul class="pro-body">
                                        <li><a href="#!" class="dropdown-item"><i class="feather icon-settings"></i> Ayarlar</a></li>
                                        <li><a href="#!" class="dropdown-item"><i class="feather icon-user"></i> Profil</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}

Header.propTypes = {
    
};

Header.defaultProps = {

};

const mapStateToProps = state => ({
    auth: getUserInfo(state)
});


const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);