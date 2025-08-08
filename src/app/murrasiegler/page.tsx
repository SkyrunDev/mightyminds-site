'use client';

import '@/components/bannerBg.css';
import { Container, Title, Text, Button, Stack, Image, Anchor, Box } from '@mantine/core';

export default function PresentationPage() {
  return (
    <>
      {/* Banner animado */}
<Box className="banner-wrapper">
  <Box className="animated-background">
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>

    <Box ta="center" c="white" px="md">
      <Title order={1}>Presentación de Marcelo Urra</Title>
    </Box>
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
