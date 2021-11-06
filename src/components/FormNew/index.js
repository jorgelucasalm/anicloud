import React from "react";
import Field from '../Field';
import Form from '../Form';
import {useForm} from 'react-hook-form';
import Button from "../Button";

const FormNew = () => {
const{register, handleSubmit} = useForm();

const newUser = (user) => {
    console.log(user);
};


return(
    <Form onSubmit={handleSubmit(newUser)}>
        <Field.Text label="Email" name="email" type="email" register={register}/>
        <Field.Text label="Senha" name="password" type="text" register={register}/>

       <Button>Login</Button> 
    </Form>
    );
}; 

export default FormNew;

