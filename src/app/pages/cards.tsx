import { Grid, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import MediaCards from "./MediaCards";
import AddIcon from '@mui/icons-material/Add';
import './Styles.css';


const mediaCards = [
    {
        image: "",
        title: "Album 1",
        description: '“Ve el mundo. Es más fantástico que cualquier sueño”',
    },
    {
        image: "",
        title: "Album 2",
        description: ' “Hay una especie de magia cuando nos vamos lejos y, al volver, hemos cambiado”',
    },
    {
        image: "",
        title: "Album 3",
        description: '“Viajar te deja sin palabras y después te convierte en un narrador de historias”',
    },
    {
        image: "",
        title: "Album 4",
        description: '“La unión es uno de los ingredientes más importantes de la vida familiar”',
    },

];
export default function Cards() {
    return (
        <Box p={4} >
            <Grid container spacing={4}>
                {mediaCards.map((mediaCards, i) => {
                    return (
                        <Grid key={i} item>
                            <MediaCards {...mediaCards} />
                        </Grid>
                    );
                })}
            </Grid>
            <IconButton >
                <AddIcon className="botonAdd" />
            </IconButton>
        </Box>
    );
}