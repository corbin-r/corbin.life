import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Router from 'next/router'

var styles = {
    appBar: {
        flexWrap: 'wrap',
        width: '100%'
    },
    gridButton: {
        float: 'right',
        padding: '8px 25px',
        margin: '0 5px'
    }
}

                            // <Button color="inherit" href="/archive" style={styles.gridButton}>
                            //     Archive
                            // </Button>
                            // <Button color="inherit" href="/" style={styles.gridButton}>
                            //     Stream
                            // </Button>

const NavBar = (props) => (
    <AppBar position="fixed" color="default" style={styles.appBar}>
        <Toolbar>
            <Grid container spacing={24}>
                <Grid item xs={12} sm>
                    <Button color="inherit" href="/">
                        corbin.life
                    </Button>
                </Grid>
                <Grid item xs={12} sm>
                    <Button color="inherit" href="/contact" style={styles.gridButton}>
                        Contact
                    </Button>

                </Grid>
            </Grid>
        </Toolbar>
    </AppBar>
)

export default NavBar;