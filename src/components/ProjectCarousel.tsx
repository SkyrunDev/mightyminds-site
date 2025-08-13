"use client";

import { Carousel } from "@mantine/carousel";
import { Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";

type Item = ProjectCardProps & { id?: string };

export default function ProjectCarousel({
  id,
  title,
  description,
  items,
  height = 350,
}: {
  id: string;
  title: string;
  description?: string;
  items: Item[];
  height?: number | string;
}) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

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
      {description && (
        <Text c="gray.3" mt="xs">
          {description}
        </Text>
      )}

      <Carousel
        height={height}
        slideSize={{ base: "70%", sm: "50%" }}
        slideGap={{ base: "md" }}
        emblaOptions={{ loop: true, align: "center" }}
        withIndicators
      >
        {items.map((card) => (
          <Carousel.Slide key={card.title}>
            <ProjectCard {...card} />
          </Carousel.Slide>
        ))}
      </Carousel>
    </section>
  );
}
