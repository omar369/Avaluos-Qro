<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { createForm } from "svelte-forms-lib";

	export let slice: Content.ContactoSlice;

	const { form, handleChange, handleSubmit } = createForm({
		initialValues: {
			title: "",
			name: "",
			email: ""
		},
		onSubmit: (values: any) => {
			alert(JSON.stringify(values));
		}
	});
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	Placeholder component for {slice.slice_type} (variation: {slice.variation}) Slices

	<form on:submit={handleSubmit}>
		<label for="title">title</label>
		<select
		  id="title"
		  name="title"
		  on:change={handleChange}
		  bind:value={$form.title}>
		  <option></option>
		  <option>Mr.</option>
		  <option>Mrs.</option>
		  <option>Mx.</option>
		</select>
	
		<label for="name">name</label>
		<input
		  id="name"
		  name="name"
		  on:change={handleChange}
		  bind:value={$form.name}
		/>
	
		<label for="email">email</label>
		<input
		  id="email"
		  name="email"
		  on:change={handleChange}
		  bind:value={$form.email}
		/>
	
		<button type="submit">Submit</button>
	  </form>
</section>


  
