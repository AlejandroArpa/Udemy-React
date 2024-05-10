import React from 'react'
import { UserContext } from './UserContext'

const user = {
	id: 123,
	name: 'Alejandro R',
	email: 'alejorp195@hotmail.com'
}

const UserProvider = ( { children } ) => {
	return (
		<UserContext.Provider value={ { hola: 'Mundo', user } }>
			{ children }
		</UserContext.Provider>
	)
}

export default UserProvider
