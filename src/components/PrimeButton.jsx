import React from 'react';
import { Button } from 'primereact/button';

export default function PrimeButton() {
    const handleClick = () => {
        alert('¡Haz hecho clic en el botón!');
    };

    return (
        <div style={{ marginTop: '1rem' }}>
            <Button label="Clic aquí" icon="pi pi-check" onClick={handleClick} />
        </div>
    );
}
