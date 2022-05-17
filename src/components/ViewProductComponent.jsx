import React, { Component } from 'react'
import ProductService from '../services/ProductService';

export class ViewProductComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            prodId: '',
            prodCode: '',
            prodCost: '',
            prodDiscount: '',
            prodGst: ''
        }
        this.loadProductsData = this.loadProductsData.bind(this);
    }

    componentDidMount() {
        this.loadProductsData();
    }

    loadProductsData() {
        ProductService.getOneProduct(window.localStorage.getItem("prodId")).then(res => {
            this.setState({
                prodId: res.data.prodId,
                prodCode: res.data.prodCode,
                prodCost: res.data.prodCost,
                prodDiscount: res.data.prodDiscount,
                prodGst: res.data.prodGst
            })
        });
    }

    render() {
        return (
            <div><br/>
                <div className='card col-md-4 offset-md-4 offset-md-4 shadow-lg '>
                <h1 className='vhdr'>Product Information</h1>
                    <div className='card-body '>
                        <table className='table vdata1'>
                            <thead>
                                <tr>
                                    <th>PRODUCT-ID</th>
                                    <td>{this.state.prodId}</td>
                                </tr>

                                <tr>
                                    <th>PRODUCT-CODE</th>
                                    <td>{this.state.prodCode}</td>
                                </tr>

                                <tr>
                                    <th>PRODUCT-COST</th>
                                    <td>{this.state.prodCost}</td>
                                </tr>

                                <tr>
                                    <th>DISCOUNT</th>
                                    <td>{this.state.prodDiscount}</td>
                                </tr>

                                <tr>
                                    <th>GST</th>
                                    <td>{this.state.prodGst}</td>
                                </tr>
                            </thead>
                        </table>

                        {/* <h2>{this.state.prodId}</h2>
                <h2>{this.state.prodCode}</h2>
                <h2>{this.state.prodCost}</h2>
                <h2>{this.state.prodDiscount}</h2>
                <h2>{this.state.prodGst}</h2> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewProductComponent