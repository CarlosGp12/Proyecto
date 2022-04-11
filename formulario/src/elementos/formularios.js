import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
  borde: "#0075FF",
  error: "#bb2929",
  exito: "#1ed12d",
  grisclaro: "#cfe2f5",
  secundario: "#0097a7",
  primario: "ffc107"
}


const Encabezado = styled.header`
  display: flex;
  justify-content: center;
`;

const Navegador = styled.nav`
  border-bottom: 1px solid #ccc;
  padding: .8rem;

  padding-bottom: 2px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5px;
`;

const Enlace = styled.a`
  text-decoration: none;
  font-size: 22px;
  color: #fff;
  border-radius: 15px;
  padding: .8rem;
  background-color: ${colores.secundario};
`;

const DivContenedor = styled.div`
  background-color: ${colores.grisclaro};
  padding: 1rem;
  margin-top: 2rem;
  border-radius: 10px;
`;

const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; 

  @media(max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Label = styled.label`
  display: block;
  color: #000;
  font-weight: bold;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  // ${props => props.error === 'false' && css`
  //   color: ${colores.error};
  // `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Selector = styled.select`
  width : 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 3px solid transparent;
`;
const Input = styled.input`
  width : 100%;
  background: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: .3s ease all;
  border: 3px solid transparent;
  
`;

const LeyendaError = styled.p`
  font-size: 14px;
  margin-bottom: 0;
  color: ${colores.error};
  
  
`;


const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${props => props.valido === 'false' && css`
    opacity: 1;
    color: ${colores.error};
  `}
  ${props => props.valido === 'true' && css`
    opacity: 1;
    color: ${colores.exito};
  `}
`;
const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
`;
const Boton = styled.button`
  height: 45px;
  line-height:45px;
  width: 30%;
  background: ${colores.secundario};
  color: #fff;
  font-weight: bold;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: .1s ease all;

  &:hover{
    box-shadow: 3px 0px 30px rgba(163,163,163,1);

  }
`;
const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
`;

const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background: #F66060;
  padding 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p{
    margin: 0;
  }
  b{
    margin-left: 10px;
  }
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  ContenedorBotonCentrado,
  Boton,
  MensajeExito,
  MensajeError,
  DivContenedor,
  Encabezado,
  Enlace,
  Navegador,
  Selector
};