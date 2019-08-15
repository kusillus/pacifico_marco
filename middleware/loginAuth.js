export default function({ app, redirect, store}) {
	if(!app.$cookies.get('user-token')) {
		// Si no existe el token lo mandamos al login
		redirect('/login')
	}
}