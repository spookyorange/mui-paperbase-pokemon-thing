import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import PokeTable from './PokeTable';
import {useState} from "react";

function DatabaseContent() {
    const [pokeData, setPokeData] = useState([]);

    const getPokeData = async () => {
        const response = await fetch('/api/pokemon');
        const data = await response.json();
        setPokeData(data.map((pokemon) => {
            return {
                id: pokemon.id,
                name: pokemon.name,
            }
        }))
    }
    getPokeData()

    return (
        <Paper sx={{maxWidth: 936, margin: 'auto', overflow: 'hidden'}}>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: '1px solid rgba(0, 0, 0, 0.12)'}}
            >
                <Toolbar>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <Typography sx={{my: 2, mx: 2}} color="text.primary" align="center">
                                asdas
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Typography sx={{my: 5, mx: 2}} color="text.secondary" align="center">
                db stuff
            </Typography>
            <div style={{height: 400, width: '100%'}}>
                <PokeTable pokeData={pokeData}/>
            </div>
        </Paper>
    );
}

export default DatabaseContent;