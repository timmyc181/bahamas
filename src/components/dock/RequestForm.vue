<script>
	import FormErrorMessage from '@/components/misc/FormErrorMessage.vue'
	import { Form, Field } from 'vee-validate'
	import { object, string } from 'yup'
	
	export default {
		name: "RequestForm",
		components: {Form, Field, FormErrorMessage},
		data() {
			return {
				processing: false,
				schema: object({
					name: string().required('Required'),
					email: string().required('Required').email('Email is invalid'),
					phoneNumber: string(),
					message: string().required('Required'),
				})
			}
		},
		methods: {
			request(data) {
				this.processing = true
				this.$http.post('/api/send-dock-request-email', data)
					.then(res => {
						this.processing = false
					})
					.catch(error => {
						this.processing = false
					})
			}
		}
	}
</script>

<template>
	<Form id="request-form" @submit="request" :validation-schema="schema" v-slot="{ errors }">
		<span class="title">Reserve</span>
		<Field name="name" placeholder="Name" rules="required"/>
		<FormErrorMessage :message="errors.name"></FormErrorMessage>
		
		<Field name="email" type="email" placeholder="Email" rules="required|email"/>
		<FormErrorMessage :message="errors.email"></FormErrorMessage>
<!--		<Field name="phoneNumber" v-mask="['(###) ###-####']" placeholder="Phone number"-->
<!--			   :rules="'required'"/>-->
<!--		<FormErrorMessage :message="errors.phoneNumber"></FormErrorMessage>-->
		
		<Field as="textarea" name="message" placeholder="Message" rules="required"/>
		<FormErrorMessage :message="errors.message"></FormErrorMessage>
		
		<button :disabled="processing">Send request</button>
	</Form>
</template>

<style scoped>
	#request-form {
		display: flex;
		align-items: stretch;
		flex-direction: column;
		flex: 1;
		max-width: 500px;
	}
	
	input {
		flex: 1;
	}
	
	textarea {
		height: 80px;
		resize: none;
	}
	
	.title {
		font-size: 52px;
		font-family: Anybody;
		margin-bottom: 10px;
	}
	
	.row > div {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
</style>