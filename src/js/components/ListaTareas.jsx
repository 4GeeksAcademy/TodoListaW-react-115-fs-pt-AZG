import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const ListaTareas = () => {
	const [tarea, setTarea] = useState("");
	const [tareas, setTareas] = useState([]);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const handleKeyUp = (e) => {
		if (e.key === "Enter" && tarea.trim() !== "") {
			setTareas([...tareas, tarea.trim()]);
			setTarea("");
		}
	};

	const eliminarTarea = (index) => {
		const nuevasTareas = tareas.filter((_, i) => i !== index);
		setTareas(nuevasTareas);
	}


	return (
		<div className="container mt-4">
			<h1 className="text-center mt-4">Lista De Tareas</h1>
			<label className="form-label" htmlFor="name"><strong>Tareas</strong></label>

			<input
				className="for-control"
				id="name"
				type="text"
				placeholder="Tareas pendientes!"
				value={tarea}
				onChange={(e) => setTarea(e.target.value)}
				onKeyUp={handleKeyUp}
			/>

			<ul className="list-group">
				{tareas.length === 0 ? (
					<li className="list-group-item text-center text-muted">
						Añade otra tarea!
					</li>
				) : (
					tareas.map((item, index) => (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between align-items-center"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<span>{item}</span>
							{hoveredIndex === index && (
								<button
									className="btn btn-outline-light btn-sm"
									onClick={() => eliminarTarea(index)}
								>
									X
								</button>
							)}
						</li>
					))
				)}
			</ul>
		</div>
	);
};
export default ListaTareas;