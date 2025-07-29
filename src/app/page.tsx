'use client';

import { Carousel } from '@mantine/carousel';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Title, Paper } from '@mantine/core';

export default function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <Title order={2} mb="md">
        Bienvenido a MightyMinds
      </Title>

      <Carousel
        withIndicators
        height={300}
        slideGap="md"
        emblaOptions={{ 
          loop: true, 
          align: 'center'
        }}
      >
        <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#f0f0f0', height: '100%' }}>
            <Title order={3}>Innovación en IoT</Title>
            <p>Desarrollamos soluciones embebidas con alto impacto tecnológico.</p>
          </Paper>
        </Carousel.Slide>

        <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#e0e0e0', height: '100%' }}>
            <Title order={3}>Inteligencia Artificial</Title>
            <p>Implementamos agentes inteligentes y sistemas de automatización.</p>
          </Paper>
        </Carousel.Slide>

        <Carousel.Slide>
          <Paper shadow="md" radius="md" p="xl" style={{ backgroundColor: '#d0d0d0', height: '100%' }}>
            <Title order={3}>Servicios a la Minería</Title>
            <p>Asesorías y soluciones tecnológicas para la industria minera chilena.</p>
          </Paper>
        </Carousel.Slide>
      </Carousel>
    </div>
  );
}
