
import { Grid, Header, Button } from "semantic-ui-react";

export default function Error404() {

    return (

        <div className="error-404">

            <p>Estamos en la pagina de 404, de pages</p>

                <Grid className="error-404-context-text">

                    <Header size="large" as="h1">
                        Error 404
                    </Header>

                    <Header size="large" as="h2">
                        oops! página no encontrada
                    </Header>

                    <Button color="red" href="./inicio">Volver al Inicio</Button>

                </Grid>
        </div>
    )
};