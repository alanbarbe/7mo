'use client';
import { useState } from "react";
import { useTheme } from 'next-themes';

export interface ZooAnimal {
    idAnimal: number;
    name: string;
    cageNumber: number;
    idTypeAnimal: number; // 1 felinos 2 aves 3 reptiles etc.
    weight: number;
  }
  
  const zooAnimals: ZooAnimal[] = [
    { idAnimal: 1, name: 'León', cageNumber: 3, idTypeAnimal: 1, weight: 180 },
    { idAnimal: 2, name: 'Águila', cageNumber: 5, idTypeAnimal: 2, weight: 5 },
    { idAnimal: 3, name: 'Serpiente', cageNumber: 2, idTypeAnimal: 3, weight: 2 },
    { idAnimal: 4, name: 'Tigre', cageNumber: 4, idTypeAnimal: 1, weight: 120 },
    { idAnimal: 5, name: 'Loro', cageNumber: 5, idTypeAnimal: 2, weight: 1 },
  ];
  
  export function getAnimalesJaula5PesoMenor3kg() {
    return zooAnimals.filter(animal => animal.cageNumber === 5 && animal.weight < 3);
  }
  
  export function getCantidadAnimalesFelinos() {
    return zooAnimals.filter(animal => animal.idTypeAnimal === 1 && animal.cageNumber >= 2 && animal.cageNumber <= 5).length;
  }
  
  export function getNombreAnimalJaula4PesoMenor120() {
    const animal = zooAnimals.find(animal => animal.cageNumber === 4 && animal.weight < 120);
    return animal ? animal.name : 'No se encontró ningún animal';
  }
  
  export default function ZooAnimalList() {
    const [animals, setAnimals] = useState<ZooAnimal[]>(zooAnimals);
    const [editingAnimal, setEditingAnimal] = useState<ZooAnimal | null>(null);
    const [newAnimal, setNewAnimal] = useState<Partial<ZooAnimal>>({});
  
    // Funciones para agregar, editar y eliminar animales
    const handleAddAnimal = () => {
        const id = Math.max(...animals.map(animal => animal.idAnimal)) + 1;
        const animal = { idAnimal: id, ...newAnimal } as ZooAnimal;
        setAnimals([...animals, animal]);
        setNewAnimal({});
    };

    const handleEditAnimal = (animal: ZooAnimal) => {
        setEditingAnimal(animal);
    };

    const handleSaveAnimal = () => {
        if (editingAnimal) {
        const updatedAnimals = animals.map(animal =>
            animal.idAnimal === editingAnimal.idAnimal ? { ...editingAnimal } : animal
        );
        setAnimals(updatedAnimals);
        setEditingAnimal(null);
        }
    };

    const handleDeleteAnimal = (idAnimal: number) => {
        const updatedAnimals = animals.filter(animal => animal.idAnimal !== idAnimal);
        setAnimals(updatedAnimals);
    };
  
    // Renderizado de la tabla y formularios
    return (
        <div className="container mx-auto my-8">
          <h1 className="text-3xl font-bold mb-4">Lista de Animales</h1>
          {/* Agregar nuevo animal */}
          <div className="mb-4">
            <h2 className="text-xl font-bold mb-2">Agregar nuevo animal</h2>
            <input
              type="text"
              placeholder="Nombre"
              value={newAnimal.name || ''}
              onChange={e => setNewAnimal({ ...newAnimal, name: e.target.value })}
              className={`border px-2 py-2 rounded-lg mr-2`}
            />
            <input
              type="number"
              placeholder="Jaula"
              value={newAnimal.cageNumber || 0}
              onChange={e => setNewAnimal({ ...newAnimal, cageNumber: parseInt(e.target.value) })}
              className={`border px-2 py-2 rounded-lg mr-2`}
            />
            <input
              type="number"
              placeholder="Tipo de Animal"
              value={newAnimal.idTypeAnimal || 0}
              onChange={e => setNewAnimal({ ...newAnimal, idTypeAnimal: parseInt(e.target.value) })}
              className={`border px-2 py-2 rounded-lg mr-2`}
            />
            <input
              type="number"
              placeholder="Peso"
              value={newAnimal.weight || 0}
              onChange={e => setNewAnimal({ ...newAnimal, weight: parseInt(e.target.value) })}
              className={`border px-2 py-2 rounded-lg mr-2`}
            />
            <button onClick={handleAddAnimal} className="bg-green-500 text-white px-4 py-2 rounded">
              Agregar
            </button>
          </div>
          {/* Tabla de animales */}
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">ID Animal</th>
                <th className="px-4 py-2">Nombre</th>
                <th className="px-4 py-2">Jaula</th>
                <th className="px-4 py-2">Tipo de Animal</th>
                <th className="px-4 py-2">Peso</th>
                <th className="px-4 py-2">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {animals.map(animal => (
                <tr key={animal.idAnimal}>
                  <td className="border px-4 py-2">{animal.idAnimal}</td>
                  <td className="border px-4 py-2">
                    {editingAnimal && editingAnimal.idAnimal === animal.idAnimal ? (
                      <input
                        type="text"
                        value={editingAnimal.name}
                        onChange={e => setEditingAnimal({ ...editingAnimal, name: e.target.value })}
                        className={`border px-2 py-1`}
                      />
                    ) : (
                      animal.name
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingAnimal && editingAnimal.idAnimal === animal.idAnimal ? (
                      <input
                        type="number"
                        value={editingAnimal.cageNumber}
                        onChange={e => setEditingAnimal({ ...editingAnimal, cageNumber: parseInt(e.target.value) })}
                        className={`border px-2 py-1`}
                      />
                    ) : (
                      animal.cageNumber
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingAnimal && editingAnimal.idAnimal === animal.idAnimal ? (
                      <input
                        type="number"
                        value={editingAnimal.idTypeAnimal}
                        onChange={e => setEditingAnimal({ ...editingAnimal, idTypeAnimal: parseInt(e.target.value) })}
                        className={`border px-2 py-1`}
                      />
                    ) : (
                      animal.idTypeAnimal
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingAnimal && editingAnimal.idAnimal === animal.idAnimal ? (
                      <input
                        type="number"
                        value={editingAnimal.weight}
                        onChange={e => setEditingAnimal({ ...editingAnimal, weight: parseInt(e.target.value) })}
                        className={`border px-2 py-1`}
                      />
                    ) : (
                      animal.weight
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingAnimal && editingAnimal.idAnimal === animal.idAnimal ? (
                      <>
                        <button
                            onClick={handleSaveAnimal}
                            className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                        >
                            Guardar
                        </button>
                        <button
                            onClick={() => setEditingAnimal(null)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Cancelar
                        </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditAnimal(animal)}
                      className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDeleteAnimal(animal.idAnimal)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}