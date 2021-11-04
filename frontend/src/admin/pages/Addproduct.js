import React from "react";
import {Button, Typography} from "@material-ui/core";
import {connect} from "react-redux";
import {mainCatagory,subcatagory,subcatagorytwo} from "../../statemanager/actions/catagorySelect";
import {addproduct} from "../../statemanager/actions/product";


class Addproduct extends React.Component{

    state={
        ProductName:"",
        catagoryId:"",
        subcatagoryId:"",
        subcatagorytwoId:"",
        Quantity:"",
        Price:"",
        Description:"",
        ProductImg:null,
        imgpreview:"",
    }
  
    changeHandler = event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    };

    onChangeFile = event =>{
       // console.log(event.target.files[0]);
        
        this.setState({ProductImg:event.target.files[0]});

        // for image preview------------------
        const file = event.target.files[0];
        
        const reader = new FileReader();
        reader.onloadend = ()=>{
            this.setState({
                file:file,
                imgpreview:reader.result
            });
        };
        if(file){
            reader.readAsDataURL(file);
        }
        
        //--------------------------------------
    }
    
   

    submitHandler = event =>{
        event.preventDefault()
        const formdata = new FormData();
        
        formdata.append("ProductName", this.state.ProductName);
        formdata.append("catagoryId",this.state.catagoryId)
        formdata.append("subcatagoryId",this.state.subcatagoryId);
        formdata.append("subcatagorytwoId",this.state.subcatagorytwoId);
        formdata.append("Quantity",this.state.Quantity);
        formdata.append("Price",this.state.Price);
        formdata.append("Description",this.state.Description);
        formdata.append("ProductImg",this.state.ProductImg);

        this.props.addproduct(formdata);

        this.setState({
            ProductName:"",
            catagoryId:"",
            subcatagoryId:"",
            subcatagorytwoId:"",
            Quantity:"",
            Price:"",
            Description:"",
            ProductImg:null,
        });
        
        
    }

    componentDidMount(){
        this.props.mainCatagory();
        
    }

 
    
    componentDidUpdate(){
        if(this.state.catagoryId!==""){
            this.props.subcatagory(this.state.catagoryId);
        
        };
        if(this.state.subcatagoryId!==""){
            this.props.subcatagorytwo(this.state.subcatagoryId);
        }
        
    }

   
    render(){
 
        const {catagories,subcatagories,subcattwo} = this.props;
       
        const {ProductName,
             catagoryId,
             subcatagoryId,
             subcatagorytwoId,
             Quantity,
             Price,
             Description,
             imgpreview,
            } = this.state;
            
        return(
            <div>
                <Typography variant="h5">Add Product</Typography>
               
                <form onSubmit={this.submitHandler} >
                    <div>
                        <label>Product Name : </label>
                        <input 
                        className=""
                        type="text"
                        placeholder="Product Name"
                        Name="ProductName"
                        id="ProductName"
                        value={ProductName}
                        onChange={this.changeHandler}

                        />
                    </div>
                    <div>
                        <label for="products">Choose a catagory : </label>
                        <select id="catagory" name="catagoryId" value={catagoryId} onChange={this.changeHandler}>
                            <option value="">Select one</option>
                            {catagories.map(item=><option value={item._id}>{item.CatagoryName}</option>)}
                        </select>
                    </div>
                   {subcatagories.length!==0 && 
                   <div>
                        <label for="products">Choose a catagory : </label>
                        <select id="subcatagory" name="subcatagoryId" value={subcatagoryId} onChange={this.changeHandler}>
                            <option value="">Select one</option>
                            {subcatagories.map(item=><option value={item._id}>{item.SubcatagoryName}</option>)}
                        </select>
                    </div>}
                    {subcattwo.length!==0 &&
                    <div>
                        <label for="products">Choose a catagory : </label>
                        <select id="subcatagorytwo" name="subcatagorytwoId" value={subcatagorytwoId} onChange={this.changeHandler}>
                            <option value="">Select one</option>
                            {subcattwo.map(item=><option value={item._id}>{item.Subcatagory_twoName}</option>)}
                        </select>
                    </div>}
                    
                    <div>
                        <label>Quantity : </label>
                        <input 
                        className=""
                        type="number"
                        placeholder="0"
                        Name="Quantity"
                        id="Quantity"
                        value={Quantity}
                        onChange={this.changeHandler}
                        />
                    </div>
                    
                    <div>
                        <label>Price : </label>
                        <input 
                        className=""
                        type="number"
                        placeholder="0"
                        Name="Price"
                        id="Price"
                        value={Price}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>Description : </label>
                        <textarea 
                        className="T_area"
                        type="text"
                        placeholder="Write a detailed description of the product."
                        Name="Description"
                        id="Description"
                        value={Description}
                        onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        <label>Upload a product image : </label>
                        <input 
                        className=""
                        type="file"
                        name="ProductImg"
                        onChange={this.onChangeFile}
                        />
                    </div>
                    <Button 
                    variant="contained" 
                    color="primary" 
                    type="submit"
                    >
                    Add product</Button>
                    
                </form>
                <div>
                    <p>{ProductName}</p>
                    <p>{catagoryId}</p>
                    <p>{subcatagoryId}</p>
                    <p>{subcatagorytwoId}</p>
                    <p>{Quantity}</p>
                    <p>{Price}</p>
                    <p>{Description}</p>
                    <div className="imgPreview"><img src={imgpreview} alt=""/></div>
                    
                </div>
            </div> 
        )
    }
}


const mapStateToProps = state => ({
    catagories: state.catagorySelect,
    subcatagories : state.subcatagorySelect,
    subcattwo: state.subcattwoSelect,
  });


export default connect(mapStateToProps,{addproduct,mainCatagory,subcatagory,subcatagorytwo}) (Addproduct) ;