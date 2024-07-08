const API_KEY = process.env.REACT_APP_API_KEY;
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
}

const api = {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Melhores Avaliados',
        items: await basicFetch(`/tv/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Em Alta',
        items: await basicFetch(`/trending/tv/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'drama',
        title: 'Drama',
        items: await basicFetch(`/discover/tv?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/tv?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'crime',
        title: 'Crime',
        items: await basicFetch(`/discover/tv?with_genres=80&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/tv?with_genres=10759&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'family',
        title: 'Família',
        items: await basicFetch(`/discover/tv?with_genres=10751&language=pt-BR&api_key=${API_KEY}`)
      },
    ];
  }
}

export default api;