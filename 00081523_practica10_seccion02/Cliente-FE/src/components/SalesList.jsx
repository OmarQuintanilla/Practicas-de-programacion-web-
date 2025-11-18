import React, { useEffect, useState } from 'react';
import API from '../utils/api.js';

const SalesList = () => {
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                // Endpoint: GET /api/sales
                const response = await API.get('/api/sales');
                setSales(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching sales:', error);
                setLoading(false);
            }
        };
        fetchSales();
    }, []);

    if (loading) return <div>Cargando listado de ventas...</div>;

    return (
        <div>
            <h2>E4: Listado de Ventas con Cliente</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID Venta</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th>Nombre Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>${parseFloat(sale.amount).toFixed(2)}</td>
                            <td>{new Date(sale.created_at).toLocaleString()}</td>
                            <td>{sale.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesList;