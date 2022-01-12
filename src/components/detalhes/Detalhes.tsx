import { Button, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import BasicMenu from '../Menu';
import './index.css';

export const Detalhes: React.FC = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);

    const url = (`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyBX2R7dRN93BVREhtNlh1A55jlxE20FYoI&part=snippet,contentDetails,statistics,status`);

    useEffect(() => {
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            setData(data.items);

        })

    }, [url])

    return (

        <>
            <BasicMenu />
            <Grid
                container
                md={12}
                xs={12}
                lg={12}
                sx={{ bgcolor: '#DFE2F1', height: 'auto', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}
            >

                {data?.map((row: any, index: number) => (


                    <Grid container spacing={0} style={{ marginBottom: '2px', height: 'auto', fontFamily: 'Bakbak One', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }} xs={12} key={index}>


                        <Card sx={{ width: 500 }}>
                            <CardHeader

                            />
                            <a href={"https://www.youtube.com/watch?v=" + row.id} target="_blank" rel='noreferrer'>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={row?.snippet.thumbnails.high.url}
                                    alt=""

                                />

                            </a>

                            <CardContent>

                                <Typography style={{ textAlign: 'center', fontFamily: 'roboto' }} ><h1>{row?.snippet.title}</h1> </Typography>
                                <div style={{
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'flex-start',


                                }}>
                                    <Typography style={{ alignSelf: 'flex-start', marginLeft: '20%', fontFamily: 'roboto' }} ><strong>Publicado em:</strong> {moment(row?.snippet.publishedAt).format('DD/MM/YYYY')}</Typography>
                                    <Typography style={{ alignSelf: 'flex-start', marginLeft: '20%', fontFamily: 'roboto' }} > <strong>Visualizações:</strong> {row?.statistics.viewCount}</Typography>
                                    <Typography style={{ alignSelf: 'flex-start', marginLeft: '20%', fontFamily: 'roboto' }} ><strong> Likes:</strong> {row?.statistics.likeCount}</Typography>
                                    <Typography style={{ alignSelf: 'flex-start', marginLeft: '20%', fontFamily: 'roboto' }} ><strong> Comentários:</strong> {row?.statistics.commentCount}</Typography>
                                </div>
                            </CardContent>
                            <div style={{ textAlign: 'center', marginTop: '15px', marginBottom: '15px' }}>

                                <Link to={`/`} style={{ textDecoration: 'none', marginTop: '30px' }}><Button variant="contained">Voltar</Button></Link>

                            </div>

                        </Card>

                    </Grid>


                ))}

            </Grid>




        </>
    );
}

