import React, { createContext, useState } from "react";

const Context = createContext();

function Authenticate({ children }) {
  const [authenticate, setAuthenticate] = useState(false);

  async function createRegister(data) {
    alert("Cadastro feito com Sucesso!");
    localStorage.setItem("data", JSON.stringify(data));
  }

  function authenticateLogin() {
    setAuthenticate(!authenticate);
  }

  return (
    <Context.Provider value={{ authenticate, createRegister, authenticateLogin }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Authenticate };
