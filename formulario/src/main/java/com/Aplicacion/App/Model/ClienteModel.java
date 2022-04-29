package com.Aplicacion.App.Model;

import java.io.File;
import java.util.Date;

import javax.persistence.*;
import javax.swing.ImageIcon;

@Entity
@Table(name = "Clientes")
public class ClienteModel {

    @Id
    private Long cod_cliente;
    @Column(unique = false, length = 13)
    private String tipoId;
    private String cedula;
    private String nombres;
    private String apellidos;
    private Date fechaNacimeinto;
    private String direccion;
    private String telefono;
    private String correo;
    private String password;
    private String imagen;

    // public File getImagen() {

    // public ImageIcon getImagen() {
    // return this.imagen;
    // }

    // public void setImagen(ImageIcon imagen) {
    // this.imagen = imagen;
    // }
    // return this.imagen;

    public String getImagen() {
        return this.imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    // }

    // public void setImagen(File imagen) {
    // this.imagen = imagen;
    // }

    // public Object getImagen() {

    // public String getImagen() {
    // return this.imagen;
    // }

    // public void setImagen(String imagen) {
    // this.imagen = imagen;
    // }
    // return this.imagen;
    // }

    // public void setImagen(Object imagen) {
    // this.imagen = imagen;
    // }

    public String getCorreo() {
        return this.correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public Long getCod_cliente() {
        return cod_cliente;
    }

    public void setCod_cliente(Long cod_cliente) {
        this.cod_cliente = cod_cliente;
    }

    public String getTipoId() {
        return this.tipoId;
    }

    public void setTipoId(String tipoId) {
        this.tipoId = tipoId;
    }

    public Date getFechaNacimeinto() {
        return this.fechaNacimeinto;
    }

    public void setFechaNacimeinto(Date fechaNacimeinto) {
        this.fechaNacimeinto = fechaNacimeinto;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
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
