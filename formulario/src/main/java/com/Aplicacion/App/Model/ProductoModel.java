package com.Aplicacion.App.Model;

import javax.persistence.*;

@Entity
@Table(name = "Productos")
public class ProductoModel {

    @Id
    private Long cod_producto;
    private String nombre;
    private Double precio;
    private Integer stock;
    private String categoria;
    private String marca;

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Long getCod_producto() {
        return cod_producto;
    }

    public void setCod_producto(Long cod_producto) {
        this.cod_producto = cod_producto;
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
