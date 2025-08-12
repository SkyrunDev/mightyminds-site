import { ActionIcon, Button, Grid, Stack, Tooltip } from "@mantine/core";
import { IconBrandGithub, IconBrandLinkedin, IconBrandWhatsapp, IconMail } from "@tabler/icons-react";
export function DirectsAccess() {
  return (
    <Stack gap="xl" mt="sm">
      <Grid columns={12} align="center" w={"100%"}>
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip label="LinkedIn">
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/marcelo-urra-siegler"
              target="_blank"
              size={80}
              color="teal.2"
              variant="subtle"
              radius="md"
            >
              <IconBrandLinkedin size={70} />
            </ActionIcon>
          </Tooltip>
        </Grid.Col>
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip label="GitHub">
            <ActionIcon
              component="a"
              href="https://github.com/SkyrunDev"
              target="_blank"
              size={80}
              color="teal.2"
              variant="subtle"
              radius="md"
            >
              <IconBrandGithub size={70} />
            </ActionIcon>
          </Tooltip>
        </Grid.Col>
      </Grid>
            <Grid columns={12} align="center" w={"100%"}>
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip label="Whatsapp">
            <ActionIcon
              component="a"
              href="https://wa.me/+56998053031"
              target="_blank"
              size={80}
              color="teal.2"
              variant="subtle"
              radius="md"
            >
              <IconBrandWhatsapp size={70} />
            </ActionIcon>
          </Tooltip>
        </Grid.Col>
        <Grid.Col span={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip label="Mail">
            <ActionIcon
              component="a"
              href="mailto:marcelo.urra.s@gmail.com"
              target="_blank"
              size={80}
              color="teal.2"
              variant="subtle"
              radius="md"
            >
              <IconMail size={70} />
            </ActionIcon>
          </Tooltip>
        </Grid.Col>
      </Grid>
    </Stack>
  );
}
