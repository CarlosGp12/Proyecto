package com.Aplicacion.App.Model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Carrito")

public class CarritoModel {

    @Id
    private Integer cod_carrito;
    private Integer id_tipo_prod;
    private String nombre;
    private String producto;
    private Integer precio;

    public Integer getCod_carrito() {
        return cod_carrito;
    }

    public void setCod_carrito(Integer cod_carrito) {
        this.cod_carrito = cod_carrito;
    }

    public Integer getId_tipo_prod() {
        return id_tipo_prod;
    }

    public void setId_tipo_prod(Integer id_tipo_prod) {
        this.id_tipo_prod = id_tipo_prod;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public Integer getPrecio() {
        return precio;
    }

    public void setPrecio(Integer precio) {
        this.precio = precio;
    }

}
