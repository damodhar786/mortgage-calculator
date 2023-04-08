import { AppBar, Container, Typography, Toolbar } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth='xl'>
                <Toolbar>
                    <Typography variant="h5">
                        Bandhan Bank
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Navbar;