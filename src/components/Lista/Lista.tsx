import React, { useEffect, useState } from 'react';
import './index.css';
import { Grid, Typography, Card, CardContent, CardHeader, IconButton, CardMedia, CardActions, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import moment from 'moment';




export default function Lista() {


    const [lista, setLista] = useState([]);



    const url = ('https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBX2R7dRN93BVREhtNlh1A55jlxE20FYoI&part=snippet&part=contentDetails&playlistId=PLQXFOW9goDGZLDJrW-pQaSIAByYurQ_a6&maxResults=5');


    useEffect(() => {
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            console.log(data.items);
            setLista(data.items);
        })

    }, [])





    // const lista = [{
    //     pos: 1,
    //     thumb: primeiroThumb,
    //     artista: primeiroNome,
    //     musica: 'Máquina do Tempo',
    //     views: 1234432,
    //     url_video: 'https://www.youtube.com/watch?v=TNIbXs_iNq8'
    // },
    // {
    //     pos: 2,
    //     thumb: segundoThumb,
    //     artista: segundoNome,
    //     musica: 'Gorilla Roxo',
    //     views: 903045,
    //     url_video: 'https://www.youtube.com/watch?v=BUL7zecHZjA'
    // },
    // {
    //     pos: 3,
    //     thumb: terceiroThumb,
    //     artista: terceiroNome,
    //     musica: 'Me Sinto Abençoado ',
    //     views: 903045,
    //     url_video: 'https://www.youtube.com/watch?v=BUL7zecHZjA'
    // },
    // {
    //     pos: 4,
    //     thumb: quartoThumb,
    //     artista: quartoNome,
    //     musica: 'Eu não sou tão bom assim',
    //     views: 903045,
    //     url_video: 'https://www.youtube.com/watch?v=5uU-vd3Ws9g'
    // },
    // {
    //     pos: 5,
    //     thumb: quintoThumb,
    //     artista: quintoNome,
    //     musica: 'Eu não sou tão bom assim',
    //     views: 903045,
    //     url_video: 'https://www.youtube.com/watch?v=5uU-vd3Ws9g'
    // }
    // ]
    return (

        <>


            <Grid container md={12} xs={12} lg={12} sx={{ bgcolor: 'black', height: 'auto', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>
                <Grid xs={12}>
                    <div style={{ backgroundColor: 'white', height: '50px', display: 'flex', justifyContent: 'center' }}>
                        <h2 style={{ color: 'black', fontFamily: 'Bakbak One', alignSelf: 'center' }} >TOP 5 do dia {moment().format('DD/MM/YYYY')} </h2>

                    </div>
                </Grid>
                {lista?.map((row: any, index: number) => (


                    <Grid container spacing={0} style={{ marginBottom: '2px', height: 'auto', fontFamily: 'Bakbak One', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} xs={12} key={index}>


                        <Card sx={{ width: 500 }}>
                            <CardHeader

                            />
                            <a href={"https://www.youtube.com/watch?v=" + row.contentDetails.videoId} target="_blank" rel='noreferrer'>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={row?.snippet.thumbnails.high.url}
                                    alt="Paella dish"

                                />

                            </a>

                            <CardContent>
                                {/* <Typography variant="body2" color="text.secondary">
                                    #{row?.snippet.position + 1} - {row?.snippet.title}
                                </Typography> */}

                                <Accordion>
                                    <AccordionSummary
                                        // expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography> #{row?.snippet.position + 1} - {row?.snippet.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                                <iframe
                                                    width="100%"
                                                    height='280px'
                                                    src={"https://www.youtube.com/embed/" + row.contentDetails.videoId}
                                                    title="YouTube video player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen>

                                                </iframe>
                                            </div>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">

                                </IconButton>
                                <IconButton aria-label="share">

                                </IconButton>

                            </CardActions>

                        </Card>

                    </Grid>


                ))}
                <hr></hr>
            </Grid>



        </>
    );
}

