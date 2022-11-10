import { Box, Button, Card, CardActions, CardContent, Grid, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import React, { Component }  from 'react';
import Image from '@jy95/material-ui-image'

const Perro = ({foto,nombre,estilo=null, funcionCancelados = null, funcionAceptados = null,estadoBoton=null, cancelado= null,
    funcionArrepentirseC=null, funcionArrepentirseA=null}) => {
    
    const perroFusion = {perroFoto: foto,perroNombre: nombre}
    //console.log(perroFusion);
    return(

      
        <Card >
            <Card>

            <h2 style={{textAlign: "center"}}>{perroFusion.perroNombre}</h2>
                <img
                    src={perroFusion.perroFoto}
                    alt="DOG"
                    width="100%" height="100%" 
                />
            </Card>
                
                
            <br></br>
            <br></br>
            <br></br>
            <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >   
                {funcionCancelados && <Button  disabled={estadoBoton} onClick={() => funcionCancelados(perroFusion)} loading={true} 
                variant="contained" color="error" sx={{ height: 40 }}>Rechazar </Button>}

                {funcionAceptados && <Button   disabled={estadoBoton} onClick={() => funcionAceptados(perroFusion)} loading={true}  
                variant="contained" color="success" sx={{ height: 40 }} >Aceptar </Button>}

                {funcionArrepentirseC && <Button   onClick={() => funcionArrepentirseC(perroFusion)} loading={true}  
                variant="contained" color="success" sx={{ height: 40 }} >Me arrepenti </Button>}


                {funcionArrepentirseA && <Button   onClick={() => funcionArrepentirseA(perroFusion)} loading={true}  
                variant="contained" color="error" sx={{ height: 40 }} >Me arrepenti </Button>}
            </Box>
                
            
        </Card> 
        
        
    );
}
export default Perro;