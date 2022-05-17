import React, { Component } from 'react'
import ProductService from '../services/ProductService';

export class ListProductComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            products: [],
            message: ''
        }
        this.productsList = this.productsList.bind(this);
        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.view = this.view.bind(this);
    }

    componentDidMount() {
        this.productsList();
    }

    productsList() {
        ProductService.getAllProducts().then((res) => {
            this.setState({ products: res.data });
            console.log(res.data);
        });
    }

    delete(id) {
        ProductService.deleteProduct(id).then((res) => {
            console.log(res.data);
            this.setState({ message: res.data });
            this.componentDidMount();
        });
    }

    edit(id){
        window.localStorage.setItem("prodId" , id);
        window.location.href = '/update';
    }

    view(id){
        window.localStorage.setItem("prodId" , id);
        window.location.href = '/view';
    }

    render() {
        return (
            <div>
                <h1 className='data3'>ListProductComponent</h1>
                {/* <h1>{JSON.stringify(this.state.products)}</h1> */}

                <table className='table table-bordered text-center table-hover data1'>
                    <thead className='data2'>
                        <tr>
                            <th>PROD-ID</th>
                            <th>PROD-CODE</th>
                            <th>PROD-COST</th>
                            <th>DISCOUNT</th>
                            <th>GST</th>
                            <th colSpan='3'>ACTIONS</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.products.map(prod =>
                                <tr key={prod.prodId}>
                                    <td>{prod.prodId}</td>
                                    <td>{prod.prodCode}</td>
                                    <td>{prod.prodCost}</td>
                                    <td>{prod.prodDiscount}</td>
                                    <td>{prod.prodGst}</td>
                                    <td>
                                        <button onClick={() => this.delete(prod.prodId)} className='btn btn-danger' >DELETE</button>
                                    </td>
                                    <td>
                                        <button onClick={() => this.edit(prod.prodId)} className='btn btn-primary' >EDIT</button>
                                    </td>
                                    <td>
                                        <button onClick={() => this.view(prod.prodId)} className='btn btn-info' >VIEW</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default ListProductComponent