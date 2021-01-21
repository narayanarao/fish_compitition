import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
class Layout extends Component {
    render(){
        return (
            <div>
                <Header/>
                <main>
                  {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}
export default Layout;