"use client";

import { Paper, Title, Text, Button } from "@mantine/core";
import classes from "@/components/ProjectCard.module.css";

export type ProjectCardProps = {
  image: string;
  title: string;
  category?: string;
  ctaLabel?: string;
  onClick?: () => void;
};

export default function ProjectCard({
  image,
  title,
  category,
  ctaLabel,
  onClick,
}: ProjectCardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      className={classes.card}
      style={{ backgroundImage: `url(${image})` }}
      aria-label={title}
    >
      <div className={classes.content}>
        {category && (
          <Text className={classes.category} size="xs">
            {category}
          </Text>
        )}
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>

      {ctaLabel && (
        <Button variant="white" color="dark" onClick={onClick}>
          {ctaLabel}
        </Button>
      )}
    </Paper>
  );
}
