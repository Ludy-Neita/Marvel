import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import ListComics from "../components/ListComics";
import useFetch from "../hooks/useFetch";

export default function Comics() {
    
    const [renderComics, setRenderComics] = useState(10);

     // useFecha ("comillas invertidas" pagina web &limit={variable useState})
    const listComics = useFetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=cb144388a602ec642946106969fe3eff&hash=1448e4152ea7fe6ac11f8e825d92b22e&limit=${renderComics}`);
    
   // console.log(listComics);

    return (
        <div>
            <p>Estamos en la pagina de comics, de pages</p>

            <div className="comics-page">
                <div id="slide-comics-image" />
                <Grid>
                    <Grid.Column>
                        <Container bg="light">
                            <Header as="h2">Los mejores Comics</Header>
                            <ListComics
                                listComics={listComics}
                                renderComics={renderComics}
                                setRenderComics={setRenderComics}
                            />
                        </Container>
                    </Grid.Column>
                </Grid>

            </div>
        </div>
    );
}