import React, { useContext } from 'react';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { IoMdRemoveCircle } from 'react-icons/io';
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)}><IoIosAddCircleOutline size='1.5em'></IoIosAddCircleOutline></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)}><IoMdRemoveCircle size='1.5em'></IoMdRemoveCircle></button></td>
        <td>< IoIosCloseCircleOutline size='1.5em' onClick={handleDeleteExpense}></IoIosCloseCircleOutline></td>
        </tr>
    );
};
export default ExpenseItem;
