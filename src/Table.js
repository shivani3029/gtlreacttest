import React from 'react';
import { FaSortUp, FaWindows } from 'react-icons/fa';

const product = [
    { id: 10, name: 'Laptop', color: 'black', price: '10 ' },
    { id: 2, name: 'Table', color: 'black', price: '7 ' },
    { id: 3, name: 'Chair', color: 'red', price: '8 ' },
    { id: 4, name: 'Computer', color: 'blue', price: '11 ' },
    { id: 5, name: 'TV', color: 'black', price: '16 ' },]


class Table extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            product: [],
            cart: []
        }
    }

    renderTableData() {
        return this.state.product.map((dynamicData) => {
            return (
                <tr key={dynamicData.id}>
                    <td>{dynamicData.id}</td>
                    <td>{dynamicData.name}</td>
                    <td>{dynamicData.color}</td>
                    <td>{dynamicData.price}</td>
                </tr>

            )
        }

        )
    }



    handleAddClick = (data) => {
        console.log(data)
        const newArray = this.state.cart;
        newArray.push(data)
        console.log(newArray)
        this.setState({ cart: newArray })
    }
    handleRemoveClick = (rowId,index) => {
        console.log(rowId)
        let newList = this.state.cart.filter((data)=> data.id !== rowId.id);
        console.log("NewList",newList)
        this.setState({ cart: newList })
        console.log (this.state.cart)
    }


    renderTableHeader() {
        let header = Object.keys(product[0])
        return header.map((key, index) => {
            return <th key={index} onClick={() => this.sortCart} >{key.toUpperCase()}<FaSortUp /> </th>
        })

    }

    sortCart(){
        const sortedList = this.state.cart.sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
           });
          this.setState({
            cart: [...sortedList],
          });
    }


    render() {
        console.log(this.state.cart)
        return (

            <div>


                <table id='product'>
                    <tbody>

                        <tr>{this.renderTableHeader()}</tr>
                        {

                            product.map((dynamicData, index) =>
                                <tr className="trow" key={index}>

                                    <td> {dynamicData.id} </td>

                                    <td>  {dynamicData.name}
                                    </td> <td> {dynamicData.category} </td>
                                    <td> {dynamicData.color} </td>
                                    <td> {dynamicData.price} </td>
                                    <td>     <button className="add-btn" id="submit" value="Add" onClick={this.handleAddClick.bind(this, dynamicData)} >Add</button></td>
                                </tr>
                            )}


                    </tbody>

                </table>
                <div>
                    <h1>Cart Details</h1>
                    <table id='product'>
                        <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        <button className="sort-btn" id="sort" value="Sort" onClick={this.sortCart.bind(this)}>Sort</button>
                            {
                                this.state.cart.map((dynamicData, index) =>
                                    <tr className="trow" key={index}>

                                        <td> {dynamicData.id} </td>

                                        <td>  {dynamicData.name}
                                        </td> <td> {dynamicData.category} </td>
                                        <td> {dynamicData.color} </td>
                                        <td> {dynamicData.price} </td>
                                        <td>     <button className="remove-btn" id="submit" value="Remove" onClick={this.handleRemoveClick.bind(this, dynamicData,index)}>Remove</button></td>
                                    </tr>
                                )}


                        </tbody>

                    </table>
                    <div><h3>Total Count : {this.state.cart.length}</h3></div>
                </div>
            </div>
        )
    }
}



export default Table;





