import React, { useState } from "react";
import { Button, Toolbar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    search_area: {
        marginTop: "20px",
    },
    searchbtn: {
        textTransform: "none",
        borderRadius: "0px 5px 5px 0px",
        //background: "orange",
        //marginLeft: "-91px" 
    },
   
    input: {
        //width: "-webkit-fill-available",
        height: "33px",
        paddingLeft: "10px",
        width: "100%",
        border: "none",
        borderRadius: "5px 0 0 5px"
    }
}));
function Search() {
    const classes = useStyles();
    const history = useHistory();
    const [productName, SetProductName] = useState("");

    const changeHandler = e => {
        SetProductName(e.target.value)
    };

    const submithandler = e => {
        e.preventDefault();
        if (productName !== "") {
            history.push(`/searchresult/${productName}`);
        }
    }

    return (

        <form onSubmit={submithandler}>
            <Toolbar className={classes.search_area}>
                <input
                    className={classes.input}
                    required
                    type="text"
                    placeholder="Search"
                    Name="productName"
                    value={productName}
                    onChange={changeHandler}
                />
                <Button
                    className={classes.searchbtn}
                    variant="contained"
                    color="primary"
                    type="submit"
                >Search</Button>
                {/* <p>{productName}</p> */}
            </Toolbar>
        </form>

    )
}

export default Search;