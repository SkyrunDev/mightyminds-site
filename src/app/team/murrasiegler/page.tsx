'use client';

import '@/components/bannerBg.css';
import { Container, Title, Text, Button, Stack, Image, Anchor, Box, Paper ,Group , Avatar ,Grid, Flex, SimpleGrid} from '@mantine/core';7
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import { InfoContacto } from '@/components/murrasiegler/InfoContacto';
import { DirectsAccess } from '@/components/murrasiegler/DirectsAccess';
//import { useRef } from 'react';
//import Autoplay from 'embla-carousel-autoplay';

export default function PresentationPage() {
  return (
    <>
      {/* Banner animado */}
<Box className="banner-wrapper"
  style={{ 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}}
>
  <Box className="animated-background">
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
      <Box
      style={{
    padding: '3rem',
    width: '100%',
    margin: '0 auto 0', // centrado y levantado
        }}>
        <Grid columns={12} align="center" w={'100%'}>
          <Grid.Col span={{ sm: 6 ,md:4}}>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
<Avatar
  src="/marcelo-urra.png"
  alt="Marcelo Urra"
  radius={80}
  size={150}
  styles={{
    root: {
      border: '3px solid rgba(97, 97, 97, 0.9)',
      boxShadow: '0 18px 36px rgba(0, 0, 0, 0.45)',
    },
    placeholder: {
      background: 'rgba(255,255,255,0.15)',
      color: 'white'
    }
  }}
/>
          </Box>
            <Title order ={2} c = "white" style={{ lineHeight: 1.1 }} ta={'center'}>
              Marcelo Urra Siegler
            </Title>
            <Text c="teal.1" ta="center">
            Ingeniero en Tecnología e Innovación. Especialista en sistemas embebidos, automatización industrial e inteligencia artificial.
            </Text>
          </Grid.Col>

          <Grid.Col  span={{ sm: 6, md: 4}}>
          {DirectsAccess()}
          </Grid.Col>
          <Grid.Col  span={{ sm: 6, md: 4}} style={{justifyContent: 'center'}} >
            {InfoContacto()}
          </Grid.Col>
        </Grid>
      </Box>
  </Box>
</Box>



<Box aria-hidden="true">
  <svg viewBox="0 0 1440 120" width="100%" height="120" preserveAspectRatio="none">
    <path d="M0,40 C240,120 480,0 720,40 C960,80 1200,20 1440,60 L1440,120 L0,120 Z"
          fill="#f8f9fa" /> {/* color de la siguiente sección */}
  </svg>
</Box>

{/* Sección siguiente */}
<Container
  size="lg"
  style={{
    marginTop: -48,      // se mete bajo el banner
    position: 'relative',
    zIndex: 2,
  }}
>
</Container>
<Title order={2} mb="md">
        Participaciones
</Title>


<Title order={2} mb="md">
        Shovel Smart Tooth
</Title>

      <Carousel
        withIndicators
        height={400}
        slideGap="md"
        slideSize="60%"
        emblaOptions={{ 
          loop: true, 
          align: 'center',
          dragFree: false
        }}
      >
        <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#f0f0f0', height: '100%' }}>
            <Title order={3}>Propuesta de solución</Title>
            <p>Trazabilidad y control de inchancables con microcontroladores y telemetría.</p>
          </Paper>
        </Carousel.Slide>

        <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#e0e0e0', height: '100%' }}>
            <Title order={3}>Desarrollo de Hardware</Title>
            <p>Prototipaje, iteración y MVP de harware de Shovel Smart Tooth.</p>
          </Paper>
        </Carousel.Slide>

        <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#d0d0d0', height: '100%' }}>
            <Title order={3}>Desarrollo de firmware</Title>
            <p>Programación de firmware de microcontroladores y arquitectura de sistemas embebidos.</p>
          </Paper>
        </Carousel.Slide>
                <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#d0d0d0', height: '100%' }}>
            <Title order={3}>Asesoría en avance de TRL1 a TRL6</Title>
            <p>Asesoría y modelamiento de sistemas y pruebas en escenarios de terreno relevante.</p>
          </Paper>
        </Carousel.Slide>
      </Carousel>

    </>
  );
}
