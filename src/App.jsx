import React from 'react';
import PrimeButton from './components/PrimeButton';
import PrimeInput from './components/PrimeInput';
import PrimeDialog from './components/PrimeDialog';

export default function App() {
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h2>🎯 Bienvenido a PrimeReact</h2>
            <PrimeInput />
            <PrimeButton />
            <PrimeDialog />
        </div>
    );
}

