"use client";

import "@/components/bannerBg.css";
import {
  Container,
  Title,
  Text,
  Button,
  Anchor,
  Box,
  Paper,
  Group,
  Avatar,
  Grid,
  SimpleGrid,
  Divider,
} from "@mantine/core";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { InfoContacto } from "@/components/murrasiegler/InfoContacto";
import { DirectsAccess } from "@/components/murrasiegler/DirectsAccess";
import ProjectCarousel, { type SlideItem } from "@/components/ProjectCarousel";

export default function PresentationPage() {
  return (
    <>
      {/* Skip link para accesibilidad */}
      <Anchor href="#content" style={{ position: "absolute", left: -9999 }}>
        Saltar al contenido
      </Anchor>

      {/* Header pegajoso con navegación por anclas */}
<Box
  component="header"
  display={{ base: "none", md: "block" }}   // <-- oculta en móvil y tablets chicas
  style={{ position: "sticky", top: 0, zIndex: 50, backdropFilter: "blur(8px)",
           background: "rgba(20,26,32,0.6)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
>

        <Container size="lg" py="sm">
          <Group justify="space-between" wrap="nowrap">
            <Anchor href="#hero" c="white" fw={700} underline="never">
              Marcelo Urra Siegler
            </Anchor>
            <Group gap="md" visibleFrom="sm">
              <Anchor href="#participaciones" c="gray.2" underline="never">
                Participaciones
              </Anchor>
              <Anchor href="#shovel" c="gray.2" underline="never">
                Proyectos
              </Anchor>
              <Anchor href="#contacto" c="gray.2" underline="never">
                Contacto
              </Anchor>
            </Group>
          </Group>
        </Container>
      </Box>
      {/* Hero / Banner animado */}
      <Box
        id="hero"
        className="banner-wrapper"
        aria-label="Banner de presentación"
      >
        <Box className="animated-background">
          <div className="wave" />
          <div className="wave" />
          <div className="wave" />

          <Container size="lg" py={{ base: 24, sm: 40 }}>
            <Grid columns={12} align="center">
              {/* Columna 1: avatar + resumen */}
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    src="/marcelo-urra.png"
                    alt="Foto de Marcelo Urra"
                    radius={80}
                    size={150}
                    styles={{
                      root: {
                        border: "3px solid rgba(97, 97, 97, 0.9)",
                        boxShadow: "0 18px 36px rgba(0, 0, 0, 0.45)",
                      },
                    }}
                  />
                </Box>
                <Title
                  order={1}
                  c="white"
                  ta="center"
                  mt="sm"
                  lh={1.1}
                  fz={{ base: 28, sm: 34 }}
                >
                  Marcelo Urra Siegler
                </Title>
                <Text
                  c="teal.2"
                  ta="center"
                  mt={4}
                  fz={{ base: "sm", sm: "md" }}
                >
                  Ingeniero en Tecnología e Innovación. Sistemas embebidos,
                  automatización industrial e IA.
                </Text>
                <Group justify="center" mt="md">
                  <Button
                    component="a"
                    href="#contacto"
                    variant="white"
                    size="sm"
                  >
                    Hablemos
                  </Button>
                  <Button
                    component="a"
                    href="#participaciones"
                    variant="default"
                    size="sm"
                  >
                    Ver proyectos
                  </Button>
                </Group>
              </Grid.Col>

              {/* Columna 2: accesos directos */}
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Box role="navigation" aria-label="Accesos directos">
                  {DirectsAccess()}
                </Box>
              </Grid.Col>

              {/* Columna 3: contacto compacto */}
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
                <Box id="contacto-resumen">{InfoContacto()}</Box>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      </Box>

      {/* CONTENIDO */}
      <Container id="content" size={"95%"} py="xl">
        {/* Participaciones */}
        <section id="participaciones" aria-label="Participaciones">
          <Title
            order={2}
            c="gray.0"
            fw={800}
            lh={1.1}
            style={{
              textShadow: "0 2px 6px rgba(0,0,0,.35)",
              position: "relative",
              display: "inline-block",
            }}
          >
            Participaciones
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -6,
                width: "42%",
                height: 3,
                background: "#00bfa5",
                borderRadius: 2,
                opacity: 0.9,
              }}
            />
          </Title>
          <Text c="gray.3" mt="xs">
            Selección de apariciones, charlas y colaboraciones relevantes.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
            <Paper p="md" radius="md" withBorder>
              <Title order={4}>Charla: IoT en Minería</Title>
              <Text c="gray.7" fz="sm" mt={4}>
                Integración de sensores, telemetría y analítica en faenas.
              </Text>
            </Paper>
            <Paper p="md" radius="md" withBorder>
              <Title order={4}>Panel: Industria 4.0</Title>
              <Text c="gray.7" fz="sm" mt={4}>
                Automatización, IA y ciberseguridad en operaciones.
              </Text>
            </Paper>
            <Paper p="md" radius="md" withBorder>
              <Title order={4}>Mentoría: Prototipado</Title>
              <Text c="gray.7" fz="sm" mt={4}>
                De TRL1 a TRL6 con foco en MVPs robustos.
              </Text>
            </Paper>
          </SimpleGrid>
        </section>

        <Divider my="xl" variant="dashed" />

        {/* Shovel Smart Tooth */}
<ProjectCarousel
  id="shovel "
  title="Shovel Smart Tooth"
  description="Trazabilidad y control de inchancables con microcontroladores y telemetría."
  slides={[
    { title: "Propuesta de solución", text: "…", image: "/img/shovel-1.jpg" },
    { title: "Desarrollo de Hardware", text: "…", image: "/shovel/pcb-shovel.jpg" },
    { title: "Desarrollo de firmware", text: "…", image: "/img/shovel-3.jpg" },
    { title: "Avance TRL1 → TRL6", text: "…", image: "/img/shovel-4.jpg" },
  ]}
/>

        <Divider my="xl" variant="dashed" />

{/* Seguridad Perimetral */}

<ProjectCarousel
  id="segper"
  title="Seguridad Perimetral"
  description="Trazabilidad y control de perimetros de seguridad con microcontroladores y telemetría."
  slides={[
    { title: "Propuesta de solución", text: "…", image: "/img/shovel-1.jpg" },
    { title: "Desarrollo de Hardware", text: "…", image: "/img/shovel-2.jpg" },
    { title: "Desarrollo de firmware", text: "…", image: "/img/shovel-3.jpg" },
    { title: "Avance TRL1 → TRL6", text: "…", image: "/img/shovel-4.jpg" },
  ]}
/>


        <Divider my="xl" variant="dashed" />

        {/* Contacto full */}
        <section id="contacto" aria-label="Contacto">
          <Title
            order={2}
            c="gray.0"
            fw={800}
            lh={1.1}
            style={{
              textShadow: "0 2px 6px rgba(0,0,0,.35)",
              position: "relative",
              display: "inline-block",
            }}
          >
            Contacto
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: -6,
                width: "42%",
                height: 3,
                background: "#00bfa5",
                borderRadius: 2,
                opacity: 0.9,
              }}
            />
          </Title>
          <Text c="gray.3" mt="xs">
            ¿Tienes un proyecto o idea? Conversemos.
          </Text>
          <InfoContacto />
        </section>
      </Container>

      {/* Footer simple */}
      <Box
        component="footer"
        mt="xl"
        py="lg"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <Container size="lg">
          <Text c="gray.5" fz="sm">
            © {new Date().getFullYear()} Marcelo Urra Siegler — Mighty Minds
          </Text>
        </Container>
      </Box>

      {/* CSS mínimo específico de esta página para scroll suave */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
        :root {
          --header-h: 64px;
        }
        /* sm por defecto en Mantine = 48em (~768px) */
        @media (max-width: 48em) {
          :root {
            --header-h: 0px;
          }
        }

        section[id],
        #hero {
          scroll-margin-top: calc(var(--header-h) + 12px);
        }
      `}</style>
    </>
  );
}
