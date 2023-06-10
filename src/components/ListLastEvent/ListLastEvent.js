import { Card, Header } from "semantic-ui-react";
import Container from "../Container";
import "./ListLastEvent.scss";
import useFetch from "../../hooks/useFetch";
import LastEvents from "../LastEvents";

export default function ListLastEvent() {
    const lastEventsFetch = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=cb144388a602ec642946106969fe3eff&hash=1448e4152ea7fe6ac11f8e825d92b22e&limit=5');
    
   // console.log(lastEventsFetch); saber que me trae la API

    return (

        <div className="container-list-last-event">

            Estamos desde listLastEvent de componets

            <Header size="large"> últimos eventos</Header>

            <Container>
                <Card.Group itemsPerRow={5}>

                    <LastEvents
                        lastEventsFetch={lastEventsFetch} />

                    <p>Los eventos ... </p>
                    <p>Los eventos ... </p>
                    <p>Los eventos ... </p>

                </Card.Group>
            </Container>

        </div>
    );

}

