import React,{ useState,useEffect } from "react";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import {useDispatch,useSelector} from "react-redux";
import { mainCatagory, subcatagory, subcatagorytwo } from "../../statemanager/actions/catagorySelect";
import { addproduct } from "../../statemanager/actions/product";


function Addproduct(){
    const dispatch = useDispatch();
    const catagories = useSelector((state)=>state.catagorySelect);
    const subcatagories = useSelector((state)=>state.subcatagorySelect);
    const subcattwo = useSelector((state)=>state.subcattwoSelect);

    const [ productData,setProductData] = useState({
        ProductName: "",
        catagoryId: "",
        subcatagoryId: "",
        subcatagorytwoId: "",
        Quantity: "",
        Price: "",
        Description: "",
        ProductImg: "",
        imgpreview: "",
    });


    useEffect(()=>{
        dispatch(mainCatagory());
        dispatch(subcatagory(productData.catagoryId));
        dispatch(subcatagorytwo(productData.subcatagoryId));
    },[productData.catagoryId,productData.subcatagoryId]);

    

    // changeHandler = event => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // };

    // onChangeFile = event => {
    //     // console.log(event.target.files[0]);

    //     this.setState({ ProductImg: event.target.files[0] });

    //     // for image preview------------------
    //     const file = event.target.files[0];

    //     const reader = new FileReader();
    //     reader.onloadend = () => {
    //         this.setState({
    //             file: file,
    //             imgpreview: reader.result
    //         });
    //     };
    //     if (file) {
    //         reader.readAsDataURL(file);
    //     }

    //     //--------------------------------------
    // }



    const submitHandler =(e)=> {
        e.preventDefault();
        const formdata = new FormData();

        formdata.append("ProductName", productData.ProductName);
        formdata.append("catagoryId", productData.catagoryId)
        formdata.append("subcatagoryId", productData.subcatagoryId);
        formdata.append("subcatagorytwoId", productData.subcatagorytwoId);
        formdata.append("Quantity", productData.Quantity);
        formdata.append("Price", productData.Price);
        formdata.append("Description", productData.Description);
        formdata.append("ProductImg",productData.ProductImg);

        dispatch(addproduct(formdata));

        setProductData({
            ProductName: "",
            catagoryId: "",
            subcatagoryId: "",
            subcatagorytwoId: "",
            Quantity: "",
            Price: "",
            Description: "",
            ProductImg: "",
        });


    }

    // componentDidMount() {
    //     this.props.mainCatagory();

    // }



    // componentDidUpdate() {
    //     if (this.state.catagoryId !== "") {
    //         this.props.subcatagory(this.state.catagoryId);

    //     };
    //     if (this.state.subcatagoryId !== "") {
    //         this.props.subcatagorytwo(this.state.subcatagoryId);
    //     }

    // }

        return (
            <div>
                <Paper style={{ padding: "10px" }}>
                    <Typography
                        variant="h5"
                        style={{ background: "#82b1ff", padding: "10px" }}
                        align="center"
                    >Add Product</Typography>
                    <div>
                        <p>{productData.ProductName}</p>
                        <p>{productData.Quantity}</p>
                        <p>{productData.Price}</p>
                        <p>{productData.Description}</p>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div style={{ marginTop: "10px" }}>
                            <Typography>Product Name : </Typography>
                            <TextField
                                fullWidth
                                size="small"
                                variant="outlined"
                                className=""
                                type="text"
                                placeholder="Product Name"
                                Name="ProductName"
                                id="ProductName"
                                value={productData.ProductName}
                                onChange={(e)=>setProductData({...productData,ProductName:e.target.value})}
                            />
                        </div>
                        <div style={{ marginTop: "10px", display: "flex", justifyContent: "space-between" }}>
                            <div style={{ width: "48%" }}>
                                <Typography>Quantity : </Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    className=""
                                    type="number"
                                    placeholder="0"
                                    Name="Quantity"
                                    id="Quantity"
                                    value={productData.Quantity}
                                    onChange={(e)=>setProductData({...productData,Quantity:e.target.value})}
                                />
                            </div>
                            <div style={{ width: "48%" }}>
                                <Typography>Price : </Typography>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="outlined"
                                    className=""
                                    type="number"
                                    placeholder="0"
                                    Name="Price"
                                    id="Price"
                                    value={productData.Price}
                                    onChange={(e)=>setProductData({...productData,Price:e.target.value})}
                                />
                            </div>
                        </div>
                        <div style={{marginTop:"10px"}}>
                            <div>
                                <Typography>Choose a category : </Typography>
                                <select
                                    style={{ height: "30px" }}
                                    id="catagory"
                                    name="catagoryId"
                                    value={productData.catagoryId}
                                    onChange={(e)=>setProductData({...productData,catagoryId:e.target.value})}
                                >
                                    <option value="">Select one</option>
                                    {catagories.map(item => <option value={item._id}>{item.CatagoryName}</option>)}
                                </select>
                            </div>
                            {subcatagories.length !== 0 &&
                                <div style={{marginTop:"10px"}}>
                                    <Typography>Choose a sub category : </Typography>
                                    <select
                                        style={{ height: "30px" }}
                                        id="subcatagory"
                                        name="subcatagoryId"
                                        value={productData.subcatagoryId}
                                        onChange={(e)=>setProductData({...productData,subcatagoryId:e.target.value})}
                                    >
                                        <option value="">Select one</option>
                                        {subcatagories.map(item => <option value={item._id}>{item.SubcatagoryName}</option>)}
                                    </select>
                                </div>
                            }
                            {subcattwo.length !== 0 &&
                                <div style={{marginTop:"10px"}}>
                                    <Typography>Choose a child category : </Typography>
                                    <select
                                        style={{ height: "30px" }}
                                        id="subcatagorytwo"
                                        name="subcatagorytwoId"
                                        value={productData.subcatagorytwoId}
                                        onChange={(e)=>setProductData({...productData,subcatagorytwoId:e.target.value})}
                                    >
                                        <option value="">Select one</option>
                                        {subcattwo.map(item => <option value={item._id}>{item.Subcatagory_twoName}</option>)}
                                    </select>
                                </div>
                            }
                        </div>
                        <div style={{marginTop:"10px"}}>
                            <Typography>Description : </Typography>
                            <textarea
                                style={{ width: "100%", margin: "10px 0px", padding: "10px", borderRadius: "5px" }}
                                className="T_area"
                                type="text"
                                placeholder="Write a detailed description of the product."
                                Name="Description"
                                id="Description"
                                value={productData.Description}
                                onChange={(e)=>setProductData({...productData,Description:e.target.value})}
                            />
                        </div>
                        <div>
                            <Typography>Upload a product image : </Typography>
                            <input
                                style={{ borderRadius: "5px", height: "30px", margin: "10px 0 10px 0" }}
                                className=""
                                type="file"
                                name="ProductImg"
                                onChange={(e) => setProductData({ ...productData,ProductImg:e.target.files[0] })}
                            />
                            {/* <div className="imgPreview"><img src={imgpreview} alt="" /></div> */}
                        </div>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Add product</Button>
                    </form>
                    
                </Paper>

            </div>
        )

}

export default Addproduct;