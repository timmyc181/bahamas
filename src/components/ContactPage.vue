<script>
	import FormErrorMessage from '@/components/misc/FormErrorMessage.vue'
	import { Form, Field, ErrorMessage } from 'vee-validate'
	import { object, string } from 'yup'
	
	export default {
		name: "ContactPage",
		components: {FormErrorMessage, Form, Field, ErrorMessage},
		data() {
			return {
				schema: object({
					name: string().required('Required'),
					email: string().required('Required').email('Email is invalid'),
					phoneNumber: string(),
					message: string().required('Required'),
				})
			}
		},
		methods: {
			contact(data) {
				this.$http.post('/api/send-contact-email', data)
					.then(res => {
					})
					.catch(error => {
					})
			}
		}
	}
</script>

<template>
	<div class="page">
		<Form class="main" @submit="contact" :validation-schema="schema" v-slot="{ errors }">
			<span class="title">Contact</span>
			
<!--			<div class="row">-->
<!--				<div>-->
<!--					<Field name="firstName" placeholder="First name" rules="required"/>-->
<!--					<FormErrorMessage :message="errors.firstName"></FormErrorMessage>-->
<!--				</div>-->
<!--				<div>-->
<!--					-->
<!--				</div>-->
<!--			</div>-->
			<Field name="name" placeholder="Name" rules="required"/>
			<FormErrorMessage :message="errors.name"></FormErrorMessage>
			
			<Field name="email" type="email" placeholder="Email" rules="required|email"/>
			<FormErrorMessage :message="errors.email"></FormErrorMessage>
			<!--			<ErrorMessage name="email"/>-->
			<Field name="phoneNumber" v-mask="['(###) ###-####']" placeholder="Phone number"
				   :rules="'required'"/>
			<FormErrorMessage :message="errors.phoneNumber"></FormErrorMessage>
			
			<Field as="textarea" name="message" placeholder="Message" rules="required"/>
			<FormErrorMessage :message="errors.message"></FormErrorMessage>
			
			<button>Send message</button>
		</Form>
	</div>
</template>

<style scoped>
	.page {
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.main {
		display: flex;
		align-items: stretch;
		flex-direction: column;
		flex: 1;
		max-width: 500px;
	}
	
	.main, .row {
		//gap: 5px;
	}
	
	.row {
		gap: 20px;
	}
	
	.row {
		display: flex;
		flex: 1;
	}
	
	input {
		flex: 1;
	}
	
	textarea {
		height: 80px;
		resize: none;
	}
	
	/*textarea, input {*/
	/*	outline: none;*/
	/*	*/
	/*	border: 2px #e0e0e0 solid;*/
	/*	border-radius: 0;*/
	/*	padding: 12px 16px;*/
	/*}*/
	
	/*textarea:focus, input:focus {*/
	/*	border: 2px #cbcbcb solid;*/
	/*	*/
	/*}*/
	
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