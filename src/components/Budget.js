import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ()=> {
    const {budget,currency} = useContext(AppContext);
    const { dispatch} = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span> Budget: {currency} 
            <input
                required = 'required'
                type = 'number'
                id = 'budget'
                value = {budget}
                step = '10'
                style = {{ marginLeft: '2 rem' , size: 10, width: '100px'}}
                onChange = {(event) => dispatch({
                        type: 'SET_BUDGET',
                        payload: event.target.value,
                        })
                  }
            >
            </input></span>
        </div>
    );
};

export default Budget;
