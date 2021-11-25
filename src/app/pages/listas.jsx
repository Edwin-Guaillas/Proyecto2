
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';
import DraftsIcon from '@mui/icons-material/Drafts';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import './Styles.css';


const Listas = () => {
    return (
        <div >
            <List component='nav' className="listas">
                <ListItemButton>
                    <ListItemIcon >
                        <FacebookIcon color="info" />
                    </ListItemIcon>
                    <ListItemText className="texto" primary='Facebook' />
                    <ArrowRightIcon />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <YouTubeIcon color="error" />
                    </ListItemIcon>
                    <ListItemText className="texto" primary='Youtobe' />
                    <ArrowRightIcon />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon color="warning" />
                    </ListItemIcon>
                    <ListItemText className="texto" primary='Correo' />
                    <ArrowRightIcon />
                </ListItemButton>

                <Divider />

                <ListItemButton>
                    <ListItemIcon>
                        < AutoDeleteIcon />
                    </ListItemIcon>
                    <ListItemText className="texto" primary='Papeleria' />
                    <ArrowRightIcon />
                </ListItemButton>
            </List>
        </div>
    )
}

export default Listas;