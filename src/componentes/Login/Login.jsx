import "./Login.css"
import React from "react";

function Login(){
    return (
        <div className="container-fluid ">
        <div className="row align-self-start align-items-end vh-100">
          <div className="col-md-5 ">
            <form>
              <div className="mb-4">
                <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
              </div>
              <div className="mb-4">
                <input type="password" className="form-control" id="password" placeholder="Digite sua senha" />
              </div>
              <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    )
} 

export default Login;