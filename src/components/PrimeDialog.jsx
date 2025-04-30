import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function PrimeDialog() {
    const [visible, setVisible] = useState(false);

    return (
        <div style={{ marginTop: '2rem' }}>
            <Button label="Abrir diálogo" icon="pi pi-external-link" onClick={() => setVisible(true)} />
            <Dialog header="Diálogo de ejemplo" visible={visible} style={{ width: '30vw' }} onHide={() => setVisible(false)}>
                <p>Este es un componente de diálogo de PrimeReact.</p>
            </Dialog>
        </div>
    );
}
