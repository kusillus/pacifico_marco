export default function({ app, redirect}) {
	if(app.$cookies.get('user-token')) {
		// Si existe el token lo mandamos al marco
		redirect('/marco')
	}
}