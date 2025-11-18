import React, { useState } from 'react';
import API from '../utils/api.js';

const CustomerSearch = () => {
    const [code, setCode] = useState('');
    const [customer, setCustomer] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setMessage('');
        setCustomer(null);
        if (!code) {
            setMessage('Ingrese un código de cliente.');
            return;
        }

        setLoading(true);
        try {
            // Endpoint: GET /api/customers/search?code=...
            const response = await API.get(`/api/customers/search?code=${code}`);
            
            if (response.data.length > 0) {
                setCustomer(response.data[0]);
                setMessage(`E5: Cliente encontrado con código ${code}.`);
            } else {
                setMessage(`E5: No se encontró ningún cliente con código ${code}.`);
            }
            setLoading(false);
        } catch (err) {
            console.error('Error al buscar cliente:', err);
            setMessage('Error al buscar cliente.');
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>E5: Búsqueda de Clientes por Código</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Código de Cliente (e.g., XYZ)"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Buscando...' : 'Buscar'}
                </button>
            </form>
            {message && <p>{message}</p>}
            {customer && (
                <div>
                    <h3>Resultado:</h3>
                    <p><strong>ID:</strong> {customer.id}</p>
                    <p><strong>Nombre:</strong> {customer.name}</p>
                    <p><strong>Dirección:</strong> {customer.address}</p>
                    <p><strong>Teléfono:</strong> {customer.phone}</p>
                </div>
            )}
        </div>
    );
};

export default CustomerSearch;