function mostrarRecordatorio() {
    const entradaDia = document.getElementById("dia").value
        .trim()
        .toLowerCase() // Convierte a minúsculas
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""); // Elimina tildes

    const notaPersonal = document.getElementById("mensaje").value.trim();
    const panelResultado = document.getElementById("resultado");

    // Validación de campos vacíos
    if (!entradaDia) {
        panelResultado.innerHTML = `<p style="color: red;">Por favor, ingresa un día de la semana.</p>`;
        return;
    }

    const tareasPorDia = {
        lunes: "Atender a un cliente específico.",
        martes: "Visitar una agencia fuera de la ciudad.",
        miercoles: "Llevar a tu hija al ballet.",
        jueves: "Priorizar entregas de desarrollo.",
        viernes: "Atender problemas de manera remota.",
        sabado: "Hacer lo que tu esposa quiera (no hay escapatoria).",
        domingo: "Toca baskeeet."
    };

    // Verifica si el día es válido
    if (!(entradaDia in tareasPorDia)) {
        panelResultado.innerHTML = `<p style="color: orange;">"${entradaDia}" no es un día válido. Intenta con uno de los días de la semana.</p>`;
        return;
    }

    const tarea = tareasPorDia[entradaDia];

    panelResultado.innerHTML = `
        <p>Hoy: ${tarea}</p>
        ${notaPersonal ? `<p>Recordatorio: ${notaPersonal}</p>` : ""}
    `;
}
