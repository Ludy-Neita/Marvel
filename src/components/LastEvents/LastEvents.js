import { Card, Icon, Image, Dimmer, Loader, Button } from 'semantic-ui-react';
import "../ListLastEvent/ListLastEvent.scss"

export default function LastEvents({ lastEventsFetch }) {

    const { loading, result } = lastEventsFetch; // estos vienen de Hook -- useFetch

    //console.log(lastEventsFetch)

    if (loading || !result) // si loading viene vacio

        return (
            <Dimmer active inverted> {/* inverted, movimiento circular */}
                <Loader inverted> Loading ... wait!</Loader>
            </Dimmer>
        );

    const { results } = result.data
    console.log(results); // trae el array de 5 

    return results.map((event, index) => ( // DUDA: DE DONDE SALE EVENT. E INDEX?

            <Card key={index} className="last-event">

            <p>Desde Last Events</p>

                <Image
                    // en la API sale la img. así: thumbnail: {path: 'http...', extension: 'jpg'}
                    src={`${event.thumbnail.path}.${event.thumbnail.extension}`}
                    wrapped
                    ui={false}
                />

                <Card.Content>

                    <Card.Header>{event.title}</Card.Header>

                    <Card.Meta>
                        <span>
                            <Icon name="book" />{event.stories.available} Comics {/*DUDA: DE DONDE SALE event.comics?*/}
                        </span>
                    </Card.Meta>

                    <Card.Description>{event.description}</Card.Description>

                </Card.Content>

                <Card.Content extra>

                    <Button
                        animated
                        fluid // hace que se mueva a un lado.
                        as="a"
                        href={event.urls[0].url} //  en la API sale la img. así: urls: 0: {type: 'XX', url: 'http..'}
                        target="_blank" // abrir una pagina a parte.
                        color="black"
                    >
                        <Button.Content visible>Ver Evento</Button.Content>

                        <Button.Content hidden> {/*se esconde inicial y se se para sale la flecha*/}
                            <Icon name="arrow right" />
                        </Button.Content>

                    </Button>

                </Card.Content>
            </Card>
     
    ));

}
