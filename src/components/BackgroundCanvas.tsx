'use client';

import { ReactNode } from 'react';
import { Opulento } from 'uvcanvas';

interface BackgroundCanvasProps {
    children: ReactNode;
    opacity?: number;
    zIndex?: number;
}

export default function BackgroundCanvas({ 
    children, 
    opacity = 0.1, 
    zIndex = -1 
}: BackgroundCanvasProps) {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: zIndex,
                opacity: opacity
            }}>
                <Opulento />
            </div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
}
