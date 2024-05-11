'use client';
import { useTheme } from 'next-themes';
// pages/index.tsx
import ZooAnimalList, {
  getAnimalesJaula5PesoMenor3kg,
  getCantidadAnimalesFelinos,
  getNombreAnimalJaula4PesoMenor120,
} from '../components/ZooAnimal';

export default function Home() {
  return (
    <div className='container mx-auto my-auto min-h-[100vh] flex flex-col justify-center items-start'>
      <h1 className="text-3xl font-bold mb-4">Datos del Zoológico</h1>
      <p>
        Cantidad de animales de la Jaula 5 con peso menor a 3 kg:{' '}
        {getAnimalesJaula5PesoMenor3kg().length}
      </p>
      <p>
        Cantidad de animales felinos entre las jaulas 2 a 5:{' '}
        {getCantidadAnimalesFelinos()}
      </p>
      <p>
        Nombre del animal de la Jaula 4 con peso menor a 120:{' '}
        {getNombreAnimalJaula4PesoMenor120()}
      </p>
      <ZooAnimalList />
    </div>
  );
}