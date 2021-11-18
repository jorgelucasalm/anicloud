import React, { useContext } from "react";
import { Context } from "../../../../Context/Authenticate";
import Field from "../Field";
import Form from "../Form";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./Validation";
import img2 from "./img/anime2.jpg";
import Div from "./style";
import { useHistory } from "react-router-dom";

const FormNew = () => {
  const { createRegister } = useContext(Context);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    createRegister(data);
    history.replace("/login");
  };

  return (
    <Div>
      <img src={img2} alt="" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field.Text
          placeholder="Usuário"
          label="Cadastro"
          name="name"
          autocomplete="on"
          type="name"
          register={register}
          {...register("name")}
          defaultValue=""
        />
        <span>{errors.name?.message}</span>
        <Field.Text
          placeholder="Email"
          label=""
          name="email"
          type="email"
          autocomplete="on"
          register={register}
          {...register("email")}
          defaultValue=""
        />
        <span>{errors.email?.message}</span>
        <Field.Text
          placeholder="Senha"
          label=""
          name="password"
          type="password"
          autocomplete="on"
          register={register}
          {...register("password")}
          defaultValue=""
        />
        <span>{errors.password?.message}</span>
        <Field.Text
          placeholder="Confirmar Senha"
          label=""
          name="confirmPassword"
          autocomplete="on"
          type="password"
          register={register}
          {...register("confirmPassword")}
          defaultValue=""
        />
        <span>{errors.confirmPassword?.message}</span>

        <Button type="submit" className="button1">
          Cadastrar
        </Button>
      </Form>
    </Div>
  );
};

export default FormNew;
