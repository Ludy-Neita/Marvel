import { Card, Dimmer, Image, Loader, Icon, Button, ButtonContent } from "semantic-ui-react";
import "./ListSeries.scss";

export default function ListSeries({ listSeries }) {

    const { loading, result } = listSeries; // se desestructura el props

    if (loading || !result) {
        return (
            <Dimmer active inverted>
                <Loader inverted>Cargando series...Espere...</Loader>
            </Dimmer>
        );
    }
    // console.log(listSeries); //peticion del listaado de las 20 resultados

    const { results } = result.data;

    return (
        <div>
            <p>Desde listado de series</p>

            <Card.Group itemsPerRow={5}>  {/* se quieren 5 columnas */}

                {results.map((res, index) => ( // aquí se crean en otro lado se definen

                    <Card key={index} className="list-series">

                        <Image
                            src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
                            wrapped
                            alt={res.title}
                            ui={false}
                        />
                        <Card.Content>

                            <Card.Header>{res.title} </Card.Header>

                            <Card.Meta>
                                <span>
                                    <Icon name="users" /> {res.creators.available}
                                </span>
                            </Card.Meta>


                            <Card.Meta>
                                <span>
                                    <Icon name="rebel" /> {res.id}
                                </span>
                            </Card.Meta>

                            <Card.Description>{res.description}</Card.Description>

                        </Card.Content>

                        <Card.Content extra>

                            <Button
                                animated
                                fluid
                                as="a"
                                href={res.urls[0].url}
                                target="_blank"
                                color="black"
                            >
                                <Button.Content visible>Más información</Button.Content>
                            
                                <Button.Content hidden><Icon name="arrow right"/>click</Button.Content>
                           
                            </Button>

                        </Card.Content>
                    </Card>

                ))}
            </Card.Group>

        </div>
    );

}