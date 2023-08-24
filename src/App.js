function Perfil() {
  return (
    <p>
      Olá, me chamo Gabriel Vinicius, tenho 16 anos e sou natural de cosmópolis.
      Eu gosto de ouvir musicas, ler livros e nas horas vagas jogar volei :)
    </p>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Bem vindos ao meu perfil</h1>
      <Perfil />
    </div>
  );
}
