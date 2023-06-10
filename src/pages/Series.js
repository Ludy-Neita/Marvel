import { Grid, Header } from "semantic-ui-react"
import Container from "../components/Container";
import ListSeries from "../components/ListSeries";
import useFetch from "../hooks/useFetch";

export default function Series() {

    //hacer peticion

    const listSeries = useFetch('http://gateway.marvel.com/v1/public/series?ts=1&apikey=cb144388a602ec642946106969fe3eff&hash=1448e4152ea7fe6ac11f8e825d92b22e&limit=20');

    console.log(listSeries);

    return (
        <div>
            <p>Estamos en la pagina de series, de pages</p>

            <div className="series-page">

                <div id="slide-series-image" /> {/*Desde el css se hace la imagen de back-ground*/}
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Las últimas series de Marvel</Header>
                            <ListSeries listSeries={listSeries} />
                        </Container>
                    </Grid.Column>
                </Grid>
            </div>
        </div>
    );
}