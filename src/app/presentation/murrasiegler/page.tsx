'use client';

import '@/components/bannerBg.css';
import { Container, Title, Text, Button, Stack, Image, Anchor, Box, Paper ,Group , Avatar ,Grid} from '@mantine/core';

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
      <Paper 
        radius ="xl" 
        p="lg" 
        style={{ background: 'rgba(0, 0, 0, 0.1)', 
        backdropFilter: 'blur(3px)', 
        border: '1px solid rgba(255, 255, 255, 0.18)',
        width: '100%',         // o 'clamp(320px, 80vw, 820px)'
        margin: '0 16px',      // margen lateral para respiro en móvil
        }}>
        <Grid columns={12} align="center">
          <Grid.Col span={{ sm: 6 ,md:3}}>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Avatar src="/marcelo-urra.png" alt="Marcelo Urra" radius="xl" size={96} styles = {{placeholder: {background : 'rgba(255,255,255,0.15)', color:'white'}}} />
          </Box>
              <Title order ={2} c = "white" style={{ lineHeight: 1.1 }} ta={'center'}>
              Marcelo Urra Siegler
            </Title>
            <Text c="dimmed" ta="center">
            Ingeniero en Tecnología e Innovación. Especialista en sistemas embebidos, automatización industrial e inteligencia artificial.
            </Text>
          </Grid.Col>
          <Grid.Col  span={{ sm: 6, md: 9}}>
          <Text c="white" mt={6}>
            Email: <Anchor href="mailto:marcelo@mightyminds.cl" c="teal.2">marcelo@mightyminds.cl</Anchor>
          </Text>
                    <Text c="white">
            Tel: <Anchor href="tel:+56912345678" c="teal.2">+56 9 1234 5678</Anchor>
          </Text>
                    <Text c="white">
            Web: <Anchor href="https://mightyminds.cl" c="teal.2">mightyminds.cl</Anchor>
          </Text>
                    <Stack gap="xs" mt="sm" >
            <Button component="a" href="https://linkedin.com/in/..." variant="white" color="dark">LinkedIn</Button>
            <Button component="a" href="/docs/CV_MarceloUrra.pdf" variant="outline" color="gray">Ver CV</Button>
          </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
  </Box>
</Box>

      {/* Contenido principal */}
      <Container size="xs" py="xl">
        <Stack align="center" gap="md">
          <Image
            src="/file.svg"
            alt="Logo MightyMinds"
            width={100}
            height={100}
            radius="md"
          />
          <Title order={2}>Marcelo Urra</Title>
          <Text c="dimmed" ta="center">
            Ingeniero en Tecnología e Innovación. Especialista en sistemas embebidos, automatización industrial e inteligencia artificial aplicada a la ingeniería.
          </Text>
          <Text>Email: <Anchor href="mailto:marcelo@mightyminds.cl">marcelo@mightyminds.cl</Anchor></Text>
          <Text>Teléfono: +56 9 1234 5678</Text>
          <Stack gap="xs" mt="md">
            <Button component="a" href="https://linkedin.com/in/..." variant="light" fullWidth>
              LinkedIn
            </Button>
            <Button component="a" href="/docs/CV_MarceloUrra.pdf" variant="outline" fullWidth>
              Ver CV
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
