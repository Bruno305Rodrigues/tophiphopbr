import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './index.css';
import { Grid, Typography, Card, CardContent, CardHeader, CardMedia, Button } from '@mui/material';
import moment from 'moment';
import BasicMenu from '../Menu';

import ReactGa from 'react-ga';

interface ILista {
    title: string;
    videoId: string;
    position: number;
    url: string;
}

const Lista: React.FC = () => {


    const [lista, setLista] = useState<ILista[]>();

    const url = ('https://youtube.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBX2R7dRN93BVREhtNlh1A55jlxE20FYoI&part=snippet&part=contentDetails&playlistId=PLQXFOW9goDGZLDJrW-pQaSIAByYurQ_a6&maxResults=5');


    useEffect(() => {
        ReactGa.initialize('G-KT0DJJLWZK');

        ReactGa.pageview('/');
    })

    useEffect(() => {
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            setLista(data.items);
        })

    }, [])

    return (

        <>

            <BasicMenu />
            <Grid container md={12} xs={12} lg={12} sx={{ bgcolor: '#DFE2F1', height: 'auto', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' }}>
                <Grid xs={12}>
                    <div style={{ backgroundColor: 'white', height: '50px', display: 'flex', justifyContent: 'center' }}>
                        <h2 style={{ color: 'black', fontFamily: 'Bakbak One', alignSelf: 'center' }} >TOP 5 do dia {moment().format('DD/MM/YYYY')} </h2>

                    </div>
                </Grid>
                {lista?.map((row: any, index: number) => (


                    <Grid container spacing={0} style={{ marginBottom: '2px', height: 'auto', fontFamily: 'Bakbak One', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'whitesmoke' }} xs={12} key={index}>


                        <Card sx={{ width: 500 }}>
                            <CardHeader

                            />
                            <a href={"https://www.youtube.com/watch?v=" + row.contentDetails.videoId} target="_blank" rel='noreferrer'>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={row?.snippet.thumbnails.high.url}
                                    alt=""

                                />

                            </a>

                            <CardContent>

                                <Typography style={{ textAlign: 'center' }} > #{row?.snippet.position + 1} - {row?.snippet.title}</Typography>
                            </CardContent>
                            <div style={{ textAlign: 'center', marginBottom: '20px' }}>

                                <Link to={`/detalhes/${row.contentDetails.videoId}`} style={{ textDecoration: 'none' }}><Button variant="contained">Detalhe</Button></Link>

                            </div>

                        </Card>

                    </Grid>


                ))}
                <hr></hr>
            </Grid>



        </>
    );
}

export default Lista;

