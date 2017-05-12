export const fetchAllPokemon = () => (
  $.ajax({
    url: '/api/pokemon'
  })
)


export const fetchPokemon = (id) => (
  $.ajax({
    url: `/api/pokemon/${id}`
  })
)

export const createPokemon = (pokemon) => {
  return $.ajax({
    method: "POST",
    url: `/api/pokemon`,
    data: { pokemon }
  })
}
