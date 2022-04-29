package com.Aplicacion.App.Model;

import javax.persistence.*;

@Entity
@Table(name = "tiposId")
public class TipoIdModel {

    @Id
    private Long IdTipo;
    @Column(unique = false, length = 13)
    private String tipoId;

    public Long getIDtipo() {
        return this.IdTipo;
    }

    public void setIDtipo(Long iDtipo) {
        this.IdTipo = iDtipo;
    }

    public String getTipoId() {
        return this.tipoId;
    }

    public void setTipoId(String tipoId) {
        this.tipoId = tipoId;
    }

}
