'use client';

import { Box, Container, Stack, Title, Text, Image, Group, Button } from '@mantine/core';
import Link from 'next/link';

export default function TeamPage() {
  return (
    <Box
      component="main"
      // Fondo a pantalla completa
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        background: 'linear-gradient(180deg, #1f2a36 0%, #141a20 100%)',
        padding: 24,
      }}
    >
      <Container size={560} p="lg">
        <Stack align="center" gap="sm">
          {/* Imagen principal (cambia la ruta si usas otro archivo) */}
          <Image
            src="/img/under-const.svg"
            alt="Sitio en construcción"
            fit="contain"
            mah={260}       // altura máx. para mantener proporción
          />

          {/* Título y texto */}
          <Title order={2} c="gray.0" ta="center" mt="sm">
            Estamos trabajando en esto
          </Title>
          <Text c="gray.4" ta="center">
            Muy pronto tendrás aquí mi nuevo sitio web. Mientras tanto, puedes visitar mi presentación o escribirme.
          </Text>

          {/* CTA opcionales */}
          <Group mt="md">
            <Button component={Link} href="/team/murrasiegler" variant="light">
              Contacto
            </Button>
          </Group>
        </Stack>
      </Container>
    </Box>
  );
}