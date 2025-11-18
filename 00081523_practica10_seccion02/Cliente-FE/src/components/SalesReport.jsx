import React, { useEffect, useState } from 'react';
import API from '../utils/api.js';

const SalesReport = () => {
    const [report, setReport] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                // Endpoint: GET /api/sales/report
                const response = await API.get('/api/sales/report');
                setReport(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching sales report:', error);
                setLoading(false);
            }
        };
        fetchReport();
    }, []);

    if (loading) return <div>Generando reporte...</div>;

    return (
        <div>
            <h2>E6: Reporte de Ventas por Cliente</h2>
            <table>
                <thead>
                    <tr>
                        <th>Cliente</th>
                        <th>Total Ventas</th>
                    </tr>
                </thead>
                <tbody>
                    {report.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>${parseFloat(item.total_sales).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesReport;