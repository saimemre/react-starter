import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import I from 'immutable';

import { getAllPlayers as getAllPlayersAction } from '../actions';
import {
    getPlayers
  } from '../selectors';

import Header from '../pages/Header';
import Sidebar from '../pages/Sidebar';

import strings from '../constants/strings';

class PlayerList extends Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const { getAllPlayers } = this.props;
        getAllPlayers();
    }


    render(){

        const { players } = this.props;
        const playersData = players.toJS();
        console.log(playersData)
        return (
            <div>
                <Sidebar />
                <Header />
                <section class="pcoded-main-container">
                    <div class="pcoded-wrapper">
                        <div class="pcoded-content">
                            <div class="pcoded-inner-content">
                                
                                <div class="main-body">
                                    <div class="page-wrapper">
                                        
                                        <div class="row">
                                        
                                            <div class="col-xl-12">
                                                <div class="card">
                                                
                                                    <div class="card-header">
                                                        <h5>OYUNCULAR</h5>
                                                    </div>
                                                    <div class="">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover">
                                                                <thead class="thead-portfoy">
                                                                    <tr>
                                                                        <th>#</th>
                                                                        <th>İsim</th>
                                                                        <th>Seviye</th>
                                                                        <th>Menzil</th>
                                                                        <th>Hasar</th>
                                                                        <th>Vuruş Hızı</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="tbody-portfoy">
                                                                {
                                                                    playersData.map((player,index) => {
                                                                        const levelColor = (player.level > 3) ? 'text-danger': 'text-success';
                                                                        return (
                                                                            <tr>
                                                                                <th scope="row"><button type="button" class="btn btn-success btn-portfoy-big shadow">{index}</button></th>
                                                                                <td>{player.idName}</td>
                                                                                <td><p class={levelColor}>{player.level}</p></td>
                                                                                <td>{player.kingsTower.range}</td>
                                                                                <td>{player.kingsTower.damage}</td>
                                                                                <td>{player.kingsTower.hitSpeed}</td>
                                                                                <td><Link to={{
                                                                                    pathname: "/player-detail",
                                                                                    search: "?id="+player._id,
                                                                                    state: { fromDashboard: true }
                                                                                  }}><button type="button" class="btn btn-rounded btn-success btn-portfoy shadow">></button></Link></td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>    
            </div>
        )
    }
}




PlayerList.propTypes = {
    getAllInvestors: PropTypes.func.isRequired,
};

PlayerList.defaultProps = {

};

const mapStateToProps = state => ({
    players: getPlayers(state)
});


const mapDispatchToProps = {
    getAllPlayers: getAllPlayersAction
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);