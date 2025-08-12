"use client";

import { Carousel } from "@mantine/carousel";
import { Title, Text, Box, Paper, AspectRatio, Image } from "@mantine/core";

// Tipado de cada slide (puedes exportarlo si quieres tipar los datos donde lo uses)
export type SlideItem = {
  title: string;
  text: string;
  image?: string;
  alt?: string;
};

type Props = {
  id: string;
  title: string;
  description?: string;
  slides: SlideItem[];
  height?: number | string; // igual que en los ejemplos oficiales
  align?: "start" | "center" | "end"; // embla align
};

export default function ProjectCarousel({
  id,
  title,
  description,
  slides,
  height = 300,
  align = "center",
}: Props) {
  return (
    <section id={id} aria-label={title}>
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
            {title}
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
          {description &&(
          <Text c="gray.3" mt="xs">
            {description}
          </Text>
          )}
      <Carousel
        withIndicators
        height={height}
        // ✅ Props responsivas según la doc: objeto con { base, sm, md, ... }
        slideSize={{ base: "90%", sm: "70%", md: "60%" }}
        slideGap={{ base: "sm", sm: "md" }}
        // ✅ Embla options tal como en la doc
        emblaOptions={{ loop: true, dragFree: false, align }}
        // Si quisieras avanzar de a 2 en desktop:
        // emblaOptions={{ loop: true, align: "start", slidesToScroll: 2 }}
      >
        {slides.map((card, i) => (
          <Carousel.Slide key={i}>
            <Paper
              withBorder
              shadow="md"
              radius="md"
              p={0}
              style={{ height: "100%", overflow: "hidden" }}
            >
              {card.image && (
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={card.image}
                    alt={card.alt || card.title}
                    fit="cover"
                    style={{ objectPosition: "center" }}
                  />
                </AspectRatio>
              )}

              <Box p="xl">
                <Title order={3} c="white">{card.title}</Title>
                <Text mt="xs">{card.text}</Text>
              </Box>
            </Paper>
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
}
