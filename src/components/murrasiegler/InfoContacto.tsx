import { Anchor, Grid, Text , Stack } from "@mantine/core";

export function InfoContacto() {
  return (
    <Stack
    align="center"
    justify="space-around"
    gap="xs"
    >
    <Grid columns={12} justify="center" align="center" w={'100%'}>
      <Grid.Col span="auto">
       </Grid.Col>
      <Grid.Col span={2}>
        <Text c="white" mt={6}>Email:</Text>
      </Grid.Col>
       <Grid.Col span={8}>
          <Text c="white" mt={6}>
          <Anchor href="mailto:marcelo.urra.s@gmail.com" c="teal.2">marcelo.urra.s@gmail.com</Anchor>
        </Text>
      </Grid.Col>
        <Grid.Col span="auto">
       </Grid.Col>
       </Grid>

    <Grid columns={12} justify="center" align="center" w={'100%'}>
        <Grid.Col span="auto">
       </Grid.Col>
      <Grid.Col span={2} content="center">
        <Text c="white">Tel:</Text>
      </Grid.Col>
       <Grid.Col span={8} content="center">
        <Text c="white">
          <Anchor href="tel:+56998053031" c="teal.2">+56 9 9805 3031</Anchor>
        </Text>
      </Grid.Col>
              <Grid.Col span="auto">
       </Grid.Col>
       </Grid>
    <Grid columns={12} justify="center" align="center" w={'100%'}>
        <Grid.Col span="auto">
       </Grid.Col>
      <Grid.Col span={2}>
        <Text c="white">Web:</Text>
      </Grid.Col>
       <Grid.Col span={8}>
        <Text c="white">
          <Anchor href="https://www.mightyminds.cl" c="teal.2">
            https://www.mightyminds.cl
          </Anchor>
        </Text>
      </Grid.Col>
              <Grid.Col span="auto">
       </Grid.Col>
       </Grid>
              
    </Stack>
  );
}
