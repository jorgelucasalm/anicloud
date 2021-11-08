import React from "react";
import Field from '../Field';
import Form from '../Form';
import {useForm} from 'react-hook-form';
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./Validation";

const FormNew = () => {
    
    const{register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });


const newUser = (user) => {
    console.log(user);
};

return(
    <Form onSubmit={handleSubmit(newUser)}>
        <Field.Text  placeholder="Email" label="Email" name="email" type="email" register={register}/>
        {errors.email?.message}
        <Field.Text placeholder="Senha" label="Senha" name="password" type="password" register={register}/>
        {errors.password?.message}
       <Button>Login</Button> 
    </Form>
    );
}; 

export default FormNew;


