import "./Insider.scss";
import { Grid, Header, Image, Icon, Button} from "semantic-ui-react";
import ImageInsider from "../../img/insider.jpeg";


export default function Insider() {

    return (
        <div>
            Desde Insider
            <div className="container-insider">

                <Grid container columns="2">
                    <Grid.Column>
                        <Image src={ImageInsider} alt="Image Insider" />
                    </Grid.Column>

                    <Grid.Column>

                        <Header size="large" color="red" as="h1">
                            Mira, Gana y Canjea
                        </Header>

                        <Header size="large" color="green" as="h3">
                            Consigue puntuación haciendo lo que te gusta
                        </Header>

                        <div className="container-insider-content-button">

                            <Button
                                animated
                                fluid // hace que se mueva a un lado.
                                as="a"
                                href={"https://developer.marvel.com/"} //  en la API sale la img. así: urls: 0: {type: 'XX', url: 'http..'}
                                target="_blank" // abrir una pagina a parte.
                                color="red"

                            >

                                <Button.Content visible>Únete ahora</Button.Content>

                                <Button.Content hidden> {/*se esconde inicial y se se para sale la flecha*/}
                                    <Icon name="arrow right" />
                                </Button.Content>

                            </Button>

                        </div>

                    </Grid.Column>
                </Grid>
            </div>
        </div >
    )
};

