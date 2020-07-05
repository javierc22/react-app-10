import React, { useContext, useState } from 'react';
import { ModalContext } from '../context/ModalContext';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Receta = ({receta}) => {

  // Configuración del Modal de Material-UI
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  // Extraer los valores del Context
  const { guardarIdReceta } = useContext(ModalContext);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{receta.strDrink}</h2>
        <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`} />
        <div className="card-body">
          <button 
            type="button" 
            className="btn btn-block btn-primary"
            onClick={() => {
              guardarIdReceta(receta.idDrink);
              handleOpen();
            }}
          >
            Ver Receta
          </button>

          <Modal 
            open={open} 
            onClose={ () => {
              guardarIdReceta(null);
              handleClose(); 
            }} 
          >
            <div style={modalStyle} className={classes.paper}>
              <h1>Desde Modal</h1>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
 
export default Receta;