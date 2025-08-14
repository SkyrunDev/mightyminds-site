'use client';

import { Box, Text } from '@mantine/core';
import { QRCodeSVG } from 'qrcode.react';

export default function QRPage() {
  const value = 'https://www.mightyminds.cl/team/murrasiegler';

  return (
    <Box
      style={{
        minHeight: '100dvh',
        display: 'grid',
        placeItems: 'center',
        gap: 12,
        background: '#fff',
        padding: 24,
      }}
    >
      <QRCodeSVG value={value} size={320} includeMargin />
      <Text c="dark.6" fz="sm">{value}</Text>
    </Box>
  );
}
