// src/app/presentation/page.tsx
'use client';

import { Container, Title, Text, Button, Stack} from '@mantine/core';

export default function PresentationPage() {
  return (
    <Container size="xs" py="xl">
      <Stack align="center" gap="md">
        <Title order={2}>MightyMinds</Title>
        <Text c="dimmed">Innovación, Tecnología y Futuro</Text>
        <Text>Email: contacto@mightyminds.cl</Text>
        <Text>Teléfono: +56 9 1234 5678</Text>
        <Button component="a" href="/" variant="light">
          Ir al sitio completo
        </Button>
      </Stack>
    </Container>
  );
}
