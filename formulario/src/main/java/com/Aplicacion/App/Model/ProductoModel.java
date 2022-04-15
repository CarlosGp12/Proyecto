package com.Aplicacion.App.Model;

import javax.persistence.*;

@Entity
@Table(name = "Productos")
public class ProductoModel {

    @Id
    private Integer cod_producto;
    private Integer id_tipo_prod;
    private String nombre;
    private Double precio;
    private Integer stock;
    private String marca;

    public Integer getCod_producto() {
        return cod_producto;
    }

    public void setCod_producto(Integer cod_producto) {
        this.cod_producto = cod_producto;
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

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

}
