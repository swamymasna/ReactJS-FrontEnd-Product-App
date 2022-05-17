import React, { Component } from 'react'
import ProductService from '../services/ProductService'

export class UpdateProductComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            prodId:'',
            prodCode: '',
            prodCost: '',
            message: ''
        }
        this.createProduct = this.createProduct.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount(){
        ProductService.getOneProduct(window.localStorage.getItem("prodId")).then(res => {
            this.setState({
                prodId: res.data.prodId,
                prodCode: res.data.prodCode,
                prodCost: res.data.prodCost
            })            
        });
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    createProduct = (e) => {
        e.preventDefault();
        let product = {
            prodId: this.state.prodId,
            prodCode: this.state.prodCode,
            prodCost: this.state.prodCost
        }
        ProductService.addProduct(product).then((res) => {
            console.log(res.data)
            //this.setState({ message: res.data });
            window.location.href = '/';
        });
    }

    render() {
        return (
            <div><br />
                <div className='card col-md-4 offset-md-4 offset-md-4 shadow-lg'>
                    <div className='card-body shadow-lg'>
                        <h3 className='creProd'>PRODUCT REGISTER PAGE</h3>
                        
                        <div className='form-group'>
                            <label className='lbl'>Product Id</label>
                            <div>
                                <input onChange={this.changeHandler} value={this.state.prodId} type='text' name='prodId' className='form-control lbl' readOnly/><br />
                            </div>
                        </div>
                        
                        <div className='form-group'>
                            <label className='lbl'>Product Name</label>
                            <div>
                                <input onChange={this.changeHandler} value={this.state.prodCode} type='text' name='prodCode' className='form-control lbl' /><br />
                            </div>
                        </div>

                        <div className='form-group'>
                            <label className='lbl'>Product Cost</label>
                            <div>
                                <input onChange={this.changeHandler} value={this.state.prodCost} type='text' name='prodCost' className='form-control lbl' /><br />
                            </div>
                        </div>
                        <button onClick={this.createProduct} className='btn btn-primary form-control'>UPDATE</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UpdateProductComponent