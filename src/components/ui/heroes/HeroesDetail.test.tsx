import { render, fireEvent, screen, waitFor, act } from '@testing-library/react';
import { HeroesDetail } from './HeroesDetail'; // Asegúrate de que importes el componente correcto


// Datos de prueba
const heroesMock = [
    {
      id: 1,
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      gender: "male",
      skin_color: "fair",
      image: "https://example.com/luke-skywalker.jpg",
      url: "https://swapi.dev/api/people/1/",
    },
    {
      id: 2,
      name: "C-3PO",
      height: 167,
      mass: 75,
      gender: "n/a",
      skin_color: "gold",
      image: "https://example.com/c-3po.jpg",
      url: "https://swapi.dev/api/people/2/",
    },
    {
      id: 3,
      name: "R2-D2",
      height: 96,
      mass: 32,
      gender: "n/a",
      skin_color: "white, blue",
      image: "https://example.com/r2-d2.jpg",
      url: "https://swapi.dev/api/people/3/",
    },
  ];

// Test de integración
test('muestra la lista de héroes y selecciona un héroe', async () => {
  // Renderizar el componente con los héroes
  render(<HeroesDetail heroes={heroesMock} />);
  
  // Verificar que los héroes se muestran en la pantalla
  expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  
  // Simular click en el primer héroe (Luke Skywalker)
  const luke = screen.getByText('Luke Skywalker');
  
  // Usamos `act` para envolver la interacción y la actualización
  await act(async () => {
    fireEvent.click(luke);  // Seleccionamos a Luke
  });

  // Esperar que el héroe seleccionado aparezca en el componente
  await waitFor(() => expect(screen.getByText('Luke Skywalker')).toBeInTheDocument());
  
  // Verificar que se muestra la tarjeta de héroe después de seleccionarlo
  expect(screen.getByRole('button', { name: /Go Back/i })).toBeInTheDocument();
});
