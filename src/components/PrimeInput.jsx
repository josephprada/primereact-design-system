import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';

export default function PrimeInput() {
    const [value, setValue] = useState('');

    return (
        <div className="p-inputgroup" style={{ marginTop: '1rem' }}>
            <span className="p-inputgroup-addon">
                <i className="pi pi-user" />
            </span>
            <InputText
                placeholder="Escribe tu nombre"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}
