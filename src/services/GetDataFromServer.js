/**
 * POKEAPI
 */

const urlTmp = "./data.json"
const url = "https://rickandmortyapi.com/api"

export const formatData = results => {
    return Promise.all(
         results.map(character => {
            const newChar = {
                id: character.id,
                name: character.name,
                species: character.species,
                status: character.status,
                image: getImage(character.url),
                origin: character.origin.name,
                episodes: character.episode.length,
                url: character.url,  
            }
            getImage(character.url).then(img => newChar.image = img);
        return newChar
    })
    )
}

const getImage = (url) =>{
    return fetch(url).then(data => data.json()).then(singleChar => {
     return singleChar.image   
    })
}

export const getCharactersData = (page = '1') => {
    return fetch(`${url}/character/?page=${page}`)
        .then(data => data.json())
        .then(chars => {
            const charsList = {
                pagination: chars.info,
                chars: chars.results
            }
            return charsList
        })
        .then(charModel =>{
            formatData(charModel.chars).then(resp => charModel.chars = resp);
            return charModel
        })
        // .then(data => formatData(data))
        .catch(err => console.log(err))
}

/**
 * LEGACY
 */
export const getDataFromServer = () => {
    return fetch(urlTmp)
        .then(resp => resp.json())
        .then(data => formatData(data.results))
}




// export default getDataFromServer;