// El ejercicio: crear dos botones. 
// -Uno que hiciera de contador y mostrara la leyenda +1 y otro que abriese un modal y cuya leyenda dijera show. 
// -Debía crear el contador y al oprimir el botón ir incrementando el valor, 
// no se mostraría esto, únicamente hasta que el usuario abriese el modal a través del botón show.

import React, { useState, useEffect } from 'react';
import { Modal, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

// colores del contador
const colors = ['blue', 'red', 'orange', 'green', 'pink'];

// funcion para aplicar los estilos
const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'absolute',
        width: 700,
        backgroundColor: 'withe',
        border: '8px solid #000',
        padding: '16px 32px 24px',
        boxShadow: 'none',
        top: '30%',
        left: '20%',
        transform: 'traslate(-50%, -50%)'
    },
    container:{
        textAlign:'center'
    },
    title: {
        textAlign:'center'
    },
    button: {
        backgroundColor: 'withe',
        border: '8px solid #000',
        //backgroundColor: '#4c5baf',
        //border: 'none',
        color: 'black',
        padding: '10px 20px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '14px',
        fontWeight: '700',  
        margin: '4px 2px',
        cursor: 'pointer',
        borderRadius: '8%'
    }
}))

export default function ModalContador() {
    // hook del contador yel color
    const [count, setCount] = useState(0);
    const [currentColor, setCurrentColor] = useState('');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        setCurrentColor(randomColor);
    }, [count]);


    // estilos
    const styles = useStyles();
    // hook para el  modal
    const [modal, setModal] = useState(false);

    // funcion para abrir y cerrar el modal, con menos codigo y simplificar ambas acciones
    const openCloseModal = () => {
        setModal(!modal)
        console.log('entre al modal');
    }

    //cuerpo del modal
    const bodyModal = (
        <div className={styles.modal}>
            <h2>SHOW</h2>
            <div className={styles.container}>
            <h1 style={{ color: currentColor }}>{count}</h1>
            </div>
            <div align='center'>
                <Button  className={styles.button} onClick={() => openCloseModal()} >CANCELAR ACCION</Button>
                <Button  className={styles.button} onClick={() => setCount(count + 1)}>INCREMENTAR</Button>
                <Button  className={styles.button} onClick={() => setCount(count - 1)}> DECREMENTAR </Button>
            </div>
        </div>
    )

    return (
        <div className={styles.container}>
            <div className='app-div'>
                <h1 className={styles.title}>PULSA EL BOTON PARA INICIAR EL CONTADOR</h1>
                <Button className={styles.button} onClick={() => openCloseModal()}> (+) </Button>
            </div>
            <br />
            <Modal
                open={modal}
                onClose={openCloseModal}>
                {bodyModal}
            </Modal>
        </div>

    );

}

