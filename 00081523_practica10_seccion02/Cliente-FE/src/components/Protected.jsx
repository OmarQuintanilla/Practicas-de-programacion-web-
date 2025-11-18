import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Nuevo Import
import API from "../utils/api";

const Protected = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Inicializar navigate

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    // Si no hay token, redirigir inmediatamente al login
    if (!token) {
        navigate('/login');
        return;
    }

    const fetchData = async () => {
      try {
        const response = await API.get("/protected");
        setMessage(response.data.message);
      } catch (err) {
        console.error(err);
        
        // Redirigir al login si la API devuelve error de autenticación (401 o 403)
        if (err.response?.status === 401 || err.response?.status === 403) {
             navigate('/login');
        } else {
             setMessage("No se pudo acceder al contenido protegido");
        }
      }
    };
    fetchData();
  }, [navigate]); // Añadir 'navigate' como dependencia

  return <h1>{message}</h1>;
};

export default Protected;