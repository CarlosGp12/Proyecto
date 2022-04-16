package com.Aplicacion.App.Model;

import javax.persistence.*;

@Entity
@Table(name = "Clientes")
public class ClienteModel {

    @Id
    private Long cod_cliente;
    @Column(unique = false, length = 13)
    private String cedula;
    private String nombres;
    private String apellidos;
    private String telefono;
    private String direccion;

    public Long getCod_cliente() {
        return cod_cliente;
    }

    public void setCod_cliente(Long cod_cliente) {
        this.cod_cliente = cod_cliente;
    }


    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

}
