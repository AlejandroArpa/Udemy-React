
const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=Dya3PxSeAQlVKhncdghiSs0pw7EIjh4x&q=${category}&limit=10`;
	try {
		const response = await fetch( url );
		if(!response.ok) throw new Error ("Fallo en la carga de gifs");
		const { data } = await response.json();
		const gifs = data.map( ({ id, title, images}) => 
			({
				id,
				title,
				url: images.downsized_medium.url
			})
		)
		console.log(gifs);
		return gifs
	} catch (error) {
		console.error(error);
	}
}

export default getGifs;