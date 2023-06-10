import { Card, Icon, Image, Dimmer, Loader, Button } from "semantic-ui-react"

export default function ListComics({ listComics, renderComics, setRenderComics }) {

    const { loading, result } = listComics;// se desestructura el props

    if (loading || !result) {
        return (
            <Dimmer active inverted>
                <Loader inverted>Cargando comics...no se vaya!...</Loader>
            </Dimmer>
        );
    }

    const { results } = result.data;

    const loadMoreComics = () => {

        const numberComics = renderComics;
        setRenderComics(numberComics + 5);

    };

   // console.log(results) para ver que se cargan los 5 de demás

    return (
        <div>
            Desde listado de comics

            <Card.Group itemsPerRow={5}>  {/* se quieren 5 columnas */}

                {results.map((res, index) => ( // aquí se crean en otro lado se definen

                    <Card key={index} className="list-comics">

                        <Image
                            src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
                            wrapped
                            ui={false} // DUDA: QUE SIGNIFICA???
                        />
                        <Card.Content>

                            <Card.Header>{res.title} </Card.Header>

                            <Card.Meta>
                                <span>
                                    <Icon name="users" /> Digital ID: {res.id}
                                </span>
                            </Card.Meta>

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

                                <Button.Content hidden><Icon name="arrow right" /></Button.Content>

                            </Button>

                        </Card.Content>

                    </Card>

                ))}

                <div className="container-button">

                    <Button color="red" onClick={() => loadMoreComics()}>
                        <Icon mane="plus" /> Cargar más Comics
                    </Button>

                </div>
            </Card.Group>

        </div>

    )

};

