import React, { useState } from 'react';
import { Container , Alert, Button, Row, Col, Form} from 'react-bootstrap';
import './admin.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Admin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [imageURLS , setImageURL] = useState(null);

    const onSubmit = data => {
        const productData = {
            name: data.product,
            price: data.price,
            wight: data.wight,
            imageURL: imageURLS
        };
        const url = `https://fierce-coast-48195.herokuapp.com/addProduct`;

        console.log(productData)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then (res => console.log('server side responsed', res))
    };


    const handleImageUpload = product => {

        const imageData = new FormData();
        imageData.set('key', '994392279289c0649211748cc7b4c09d');
        imageData.append('image', product.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <Container>
        <Row>
            <Col className="left_sideBar" md={3}></Col>

            <Col className="right_sideBar" md={9}>
                <Alert border="info" >
                </Alert>
                <Alert variant="info">
                <Alert.Heading>Add Your Products</Alert.Heading>




                
                <form onSubmit={handleSubmit(onSubmit)}>

                    <label >Product Name : </label>
                    <input name="product" placeholder="New Product Name" ref={register} />
                    <hr/>

                    <label >Product image upload: </label>
                    <input type="file" name="exampleRequired" onChange={handleImageUpload}/>
                    <hr/>
                    
                    <label >Product Price: </label>
                    <input name="price" placeholder="Product Price" ref={register} />
                    
                    <hr/>
                    <label >Product wight : </label>
                    <input name="wight" placeholder="Product wight" ref={register} />

                    <hr/>
                    
                    <input type="submit" />

                </form>


















































{/* 
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Row} controlId="formPlaintextPassword">

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Add product Name</Form.Label>
                            <Form.Control name="example" type="text" placeholder="Enter product name" defaultValue="product Name" {...register("example")} />
                        </Form.Group>    

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Add product Weight</Form.Label>
                            <Form.Control name="exampleRequired" type="number" placeholder="Enter product Weight" {...register("example")} />
                        </Form.Group>   

                    </Form.Group>


                    <Form.Group as={Row} controlId="formPlaintextPassword">

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Add product pricePrice</Form.Label>
                            <Form.Control name="Required" type="number" placeholder="Enter product price" {...register("example")} />
                        </Form.Group>     

                        <Form.File type="file" name="exampleRequired" label="Example file input" onChange={handleImageUpload} />
                        

                    </Form.Group>
                    <hr/>
                    <Button variant="info" type="submit">Add product</Button>
                </Form> */}




                <hr />
                <p className="mb-0">
                    <strong className="text-info">Note:</strong> Whenever you need to add product, be sure to use all input box to keep things nice
                    and tidy.
                </p>
                </Alert>
            </Col>
            </Row>
        </Container>
    );
};

export default Admin;




























// <Alert border="info" >
// <h2>ICREAMIST</h2>
// </Alert>
// <Alert variant="success">
// <Alert.Heading>Hey, nice to see you</Alert.Heading>
// <p>
// Aww yeah, you successfully read this important alert message. This example
// text is going to run a bit longer so that you can see how spacing within an
// alert works with this kind of content.
// </p>
// <hr />
// <p className="mb-0">
// Whenever you need to, be sure to use margin utilities to keep things nice
// and tidy.
// </p>
// </Alert>
// <Button  variant="info">Test</Button>