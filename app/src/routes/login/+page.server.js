import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	if (locals.pb.authStore.isValid) {
		throw redirect(303, '/');
	}
}

/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);

		try {
			//@ts-ignore
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (e) {
			console.error(e);
			throw e;
		}

		throw redirect(303, '/');
	}
};
