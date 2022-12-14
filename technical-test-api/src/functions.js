export const getData = async () => {
  const getUrl = await fetch(
    'https://rickandmortyapi.com/api/character/?page=1'
  );
  const { info, results } = await getUrl.json();

  console.log(info, results);
};
