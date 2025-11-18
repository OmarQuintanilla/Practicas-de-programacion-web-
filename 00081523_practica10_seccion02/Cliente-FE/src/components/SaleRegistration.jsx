import React, { useState } from 'react';
import API from '../utils/api.js';

const SaleRegistration = () => {
    const [amount, setAmount] = useState('');
    const [customerId, setCustomerId] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            // Endpoint: POST /api/sales
            await API.post('/api/sales', {
                amount: parseFloat(amount),
                id_customer: parseInt(customerId),
            });
            setMessage('E3: Venta registrada con éxito!');
            setAmount('');
            setCustomerId('');
        } catch (err) {
            console.error('Error al registrar venta:', err);
            setError(err.response?.data?.message || 'Error al registrar venta.');
        }
    };

    return (
        <div>
            <h2>E3: Registrar Nueva Venta</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Monto"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="ID Cliente"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    required
                />
                <button type="submit">Registrar Venta</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SaleRegistration;