export const esNombre = (value) =>{
    return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value);
}
export const esPrecio = (value) =>{
    return /^[\d{1,4}]+.[\d{2}]+$/.test(value);
}
export const esStock = (value) =>{
    return /^\d{1,4}$/.test(value);
}
export const esMarca = (value) =>{
    return /^[a-zA-Z0-9\_\-]{4,16}$/.test(value);
}
export const esCedula = (value) =>{
    return /^\d{10,10}$/.test(value);
}
export const esDireccion = (value) =>{
    return /^[a-zA-Z0-9\s]{4,16}$/.test(value);
}
export const esTelefono = (value) =>{
    return /^\d{7,14}$/.test(value);
}

