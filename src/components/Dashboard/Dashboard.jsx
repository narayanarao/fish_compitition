import React, {useContext} from 'react';
import Aux from '../../hoc/Auxlary';
import {UserContext} from '../../context/UserContext';
const Dashboard = () => {
    const user = useContext(UserContext);
    console.log(user);
    return (
        <Aux>
            <div>
                <h3>Dashboard</h3>
            </div>
        </Aux>
    )
}
export default Dashboard;