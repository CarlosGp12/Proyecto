import * as CT from "./ClientesTypes";
import axios from "axios";

export const saveCliente = (cliente) => {
  return (dispatch) => {
    dispatch({
      type: CT.SAVE_CLIENTE_REQUEST,
    });
    axios
      .post("http://localhost:8081/clientes", cliente)
      .then((response) => {
        dispatch(clienteSuccess(response.data));
      })
      .catch((error) => {
        dispatch(clienteFailure(error));
      });
  };
};

export const fetchcliente = (cod_cliente) => {
  return (dispatch) => {
    dispatch({
      type: CT.FETCH_CLIENTE_REQUEST,
    });
    axios
      .get("http://localhost:8081/clientes" + cod_cliente)
      .then((response) => {
        dispatch(clienteSuccess(response.data));
      })
      .catch((error) => {
        dispatch(clienteFailure(error));
      });
  };
};

export const updateCliente = (cliente) => {
  return (dispatch) => {
    dispatch({
      type: CT.UPDATE_CLIENTE_REQUEST,
    });
    axios
      .put("http://localhost:8081/rest/books", cliente)
      .then((response) => {
        dispatch(clienteSuccess(response.data));
      })
      .catch((error) => {
        dispatch(clienteFailure(error));
      });
  };
};

export const deleteCliente = (cod_cliente) => {
  return (dispatch) => {
    dispatch({
      type: CT.DELETE_CLIENTE_REQUEST,
    });
    axios
      .delete("http://localhost:8081/rest/books" + cod_cliente)
      .then((response) => {
        dispatch(clienteSuccess(response.data));
      })
      .catch((error) => {
        dispatch(clienteFailure(error));
      });
  };
};

const clienteSuccess = (cliente) => {
  return {
    type: CT.CLIENTE_SUCCESS,
    payload: cliente,
  };
};

const clienteFailure = (error) => {
  return {
    type: CT.CLIENTE_FAILURE,
    payload: error,
  };
};
