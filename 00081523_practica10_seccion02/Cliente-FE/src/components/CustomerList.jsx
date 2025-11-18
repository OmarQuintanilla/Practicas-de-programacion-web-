import React, { useEffect, useState } from 'react';
import API from '../utils/api.js'; 

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                // Endpoint: GET /api/customers
                const response = await API.get('/api/customers');
                setCustomers(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching customers:', error);
                setLoading(false);
            }
        };
        fetchCustomers();
    }, []);

    if (loading) return <div>Cargando clientes...</div>;

    return (
        <div>
            <h2>E2: Listado Básico de Clientes</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Código</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.code}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerList;