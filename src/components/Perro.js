import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Tooltip, Typography} from "@mui/material";
import { Stack } from "@mui/system";
import React, { Component, useState}  from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Perro = ({foto,nombre,descripcion,estilo=null, funcionCancelados = null, funcionAceptados = null,estadoBoton=null, cancelado= null,
    funcionArrepentirseC=null, funcionArrepentirseA=null}) => {
    
    const perroFusion = {perroFoto: foto, perroNombre: nombre, descripcionPerro: descripcion}
    //console.log(perroFusion);    
    const [show, setShow] = useState(false);
    return(
    <>
      
        <Card >
            <Card item  sx={{ maxHeight: "60vh"}}>

            <h2 style={{textAlign: "center"}}>{perroFusion.perroNombre}</h2>
                <img
                    src={perroFusion.perroFoto}
                    alt="DOG"
                    width="100%" height="100%" 
                />
                
            </Card>
            <Box alignItems="center" display="flex">

                    <Box>
                        
                        {funcionAceptados && <Typography variant="subtitle1" gutterBottom>{perroFusion.descripcionPerro} </Typography>}
                        

                        {(funcionArrepentirseC ||funcionArrepentirseA) &&  
                        <Tooltip title="Ver Descripción" arrow>
                            <MoreHorizIcon fontSize="large" onClick={() => setShow(prev => !prev)}></MoreHorizIcon>
                        </Tooltip>}
                        
                        {show && <Typography variant="subtitle1" gutterBottom>{perroFusion.descripcionPerro} </Typography>} 

                    </Box> 
            </Box>
                
            
            <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >   
                {funcionCancelados && <Tooltip title="Rechazar" arrow>
                    
                <DoDisturbIcon fontSize="large" disabled={estadoBoton} onClick={() => funcionCancelados(perroFusion)} 
                variant="contained" color="error" sx={{ height: 40 }}></DoDisturbIcon>
                </Tooltip>
                }

                {funcionAceptados && <Tooltip title="Aceptar" arrow>

                <FavoriteIcon fontSize="large"  disabled={estadoBoton} onClick={() => funcionAceptados(perroFusion)}   
                variant="contained" color="success" sx={{ height: 40 }} ></FavoriteIcon>

                </Tooltip>
                }

                {funcionArrepentirseC && <Tooltip title="Me arrepenti" arrow>
                    
                <UndoIcon fontSize="large"  onClick={() => {funcionArrepentirseC(perroFusion); setShow(false);}} 
                variant="contained" color="success" sx={{ height: 40 }} ></UndoIcon>
                    
                </Tooltip>
                }

                {funcionArrepentirseA && <Tooltip title="Me arrepenti" arrow>
                    
                <RedoIcon  fontSize="large" onClick={() => {funcionArrepentirseA(perroFusion);  setShow(false);}} 
                variant="contained" color="error" sx={{ height: 40 }} ></RedoIcon>

                </Tooltip>
                }
            </Box>
                
            
        </Card> 
        <br></br>
    </>
    );
}
export default Perro;