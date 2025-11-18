import React from "react";
// Importar Link para la navegación
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"; 
import Login from "./components/Login";
import Protected from "./components/Protected";

// Importar los nuevos componentes de Guía 10
// Asegúrate de que las rutas de importación coincidan con tu estructura de carpetas
import CustomerList from "./components/CustomerList";
import SaleRegistration from "./components/SaleRegistration";
import SalesList from "./components/SalesList";
import CustomerSearch from "./components/CustomerSearch";
import SalesReport from "./components/SalesReport";

// Componente simple para la navegación
const NavBar = () => (
    <nav style={{ marginBottom: '20px', padding: '10px', borderBottom: '1px solid #ccc' }}>
        <Link to="/login" style={{ margin: '0 10px' }}>Login</Link> |
        <Link to="/protected" style={{ margin: '0 10px' }}>Ruta Protegida</Link> |
        <Link to="/customers" style={{ margin: '0 10px' }}>E2: Listar Clientes</Link> |
        <Link to="/register-sale" style={{ margin: '0 10px' }}>E3: Registrar Venta</Link> |
        <Link to="/sales-list" style={{ margin: '0 10px' }}>E4: Listar Ventas</Link> |
        <Link to="/search-customer" style={{ margin: '0 10px' }}>E5: Buscar Cliente</Link> |
        <Link to="/sales-report" style={{ margin: '0 10px' }}>E6: Reporte Ventas</Link>
    </nav>
);

const App = () => (
    <Router>
        <NavBar />
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/protected" element={<Protected />} />
            
            {/* NUEVAS RUTAS DE GUÍA 10 */}
            <Route path="/customers" element={<CustomerList />} />
            <Route path="/register-sale" element={<SaleRegistration />} />
            <Route path="/sales-list" element={<SalesList />} />
            <Route path="/search-customer" element={<CustomerSearch />} />
            <Route path="/sales-report" element={<SalesReport />} />

            {/* Ruta raíz */}
             <Route path="/" element={<p>Usa la barra de navegación para probar los ejercicios de la Guía 10.</p>} />
        </Routes>
    </Router>
);

export default App;