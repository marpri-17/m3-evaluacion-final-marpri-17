const url = "./data.json"

const formatData = results => {
    const NewData = results.map(character => {
        return {
            id: character.id,
            name: character.name,
            species: character.species,
            status: character.status,
            image: character.image,
            origin: character.origin.name,
            episodes: character.episode.length,
        }
    })
    return NewData;
}

const getDataFromServer = () => {
    return fetch(url)
        .then(resp => resp.json())
        .then(data => formatData(data.results))
}

export default getDataFromServer;