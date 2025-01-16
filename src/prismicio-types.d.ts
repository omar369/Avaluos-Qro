// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = ContactoSlice | MetodosSlice | AboutSlice | HeroSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
	/**
	 * Title field in *Page*
	 *
	 * - **Field Type**: Title
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	title: prismic.TitleField;

	/**
	 * Slice Zone field in *Page*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#slices
	 */
	slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
	 * Meta Title field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: page.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Page*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: page.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * Meta Image field in *Page*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: page.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<
	Simplify<PageDocumentData>,
	'page',
	Lang
>;

/**
 * Item in *Settings → Nav Item*
 */
export interface SettingsDocumentDataNavItemItem {
	/**
	 * Link field in *Settings → Nav Item*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[].link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	link: prismic.LinkField;

	/**
	 * Label field in *Settings → Nav Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[].text
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	text: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
	/**
	 * Name field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.name
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Nav Item field in *Settings*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.nav_item[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	nav_item: prismic.GroupField<Simplify<SettingsDocumentDataNavItemItem>>;

	/**
	 * CTA Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.cta_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	cta_link: prismic.LinkField;

	/**
	 * CTA Label field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.cta_label
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	cta_label: prismic.KeyTextField;

	/**
	 * Facebook Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.facebook_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	facebook_link: prismic.LinkField;

	/**
	 * GitHub Link field in *Settings*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.github_link
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	github_link: prismic.LinkField /**
	 * Meta Title field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_title
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */;
	meta_title: prismic.KeyTextField;

	/**
	 * Meta Description field in *Settings*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.meta_description
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	meta_description: prismic.KeyTextField;

	/**
	 * OG Image field in *Settings*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.og_image
	 * - **Tab**: Metadata
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	og_image: prismic.ImageField<never>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<
	Simplify<SettingsDocumentData>,
	'settings',
	Lang
>;

export type AllDocumentTypes = PageDocument | SettingsDocument;

/**
 * Primary content in *About → Default → Primary*
 */
export interface AboutSliceDefaultPrimary {
	/**
	 * Heading field in *About → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Description field in *About → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.default.primary.description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Button Label field in *About → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.default.primary.button_label
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	button_label: prismic.KeyTextField;

	/**
	 * Button Link field in *About → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.default.primary.button_link
	 * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
	 */
	button_link: prismic.LinkField;

	/**
	 * Image field in *About → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: about.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for About Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<AboutSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *About*
 */
type AboutSliceVariation = AboutSliceDefault;

/**
 * About Shared Slice
 *
 * - **API ID**: `about`
 * - **Description**: About
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSlice = prismic.SharedSlice<'about', AboutSliceVariation>;

/**
 * Primary content in *Contacto → Default → Primary*
 */
export interface ContactoSliceDefaultPrimary {
	/**
	 * Heading field in *Contacto → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contacto.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Details field in *Contacto → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contacto.default.primary.details
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	details: prismic.RichTextField;

	/**
	 * Contact Image field in *Contacto → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contacto.default.primary.contact_image
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	contact_image: prismic.ImageField<never>;

	/**
	 * Name field in *Contacto → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contacto.default.primary.name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Email field in *Contacto → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contacto.default.primary.email
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	email: prismic.KeyTextField;

	/**
	 * Subject field in *Contacto → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contacto.default.primary.subject
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	subject: prismic.KeyTextField;

	/**
	 * Message field in *Contacto → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contacto.default.primary.message
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	message: prismic.KeyTextField;

	/**
	 * Contact_Img field in *Contacto → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contacto.default.primary.contact_img
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	contact_img: prismic.ImageField<never>;
}

/**
 * Default variation for Contacto Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactoSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<ContactoSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Contacto*
 */
type ContactoSliceVariation = ContactoSliceDefault;

/**
 * Contacto Shared Slice
 *
 * - **API ID**: `contacto`
 * - **Description**: Contacto
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactoSlice = prismic.SharedSlice<'contacto', ContactoSliceVariation>;

/**
 * Primary content in *Gallery → Default → Primary*
 */
export interface GallerySliceDefaultPrimary {
	/**
	 * Image 1 field in *Gallery → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: gallery.default.primary.image_1
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image_1: prismic.ImageField<never>;

	/**
	 * Image 2 field in *Gallery → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: gallery.default.primary.image_2
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image_2: prismic.ImageField<never>;

	/**
	 * Image 3 field in *Gallery → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: gallery.default.primary.image_3
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image_3: prismic.ImageField<never>;

	/**
	 * Image 4 field in *Gallery → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: gallery.default.primary.image_4
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image_4: prismic.ImageField<never>;

	/**
	 * Image 5 field in *Gallery → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: gallery.default.primary.image_5
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image_5: prismic.ImageField<never>;

	/**
	 * Image 6 field in *Gallery → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: gallery.default.primary.image_6
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image_6: prismic.ImageField<never>;

	/**
	 * Image 7 field in *Gallery → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: gallery.default.primary.image_7
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image_7: prismic.ImageField<never>;

	/**
	 * Image 8 field in *Gallery → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: gallery.default.primary.image_8
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image_8: prismic.ImageField<never>;

	/**
	 * Image 9 field in *Gallery → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: gallery.default.primary.image_9
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	image_9: prismic.ImageField<never>;
}

/**
 * Default variation for Gallery Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<GallerySliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Gallery*
 */
type GallerySliceVariation = GallerySliceDefault;

/**
 * Gallery Shared Slice
 *
 * - **API ID**: `gallery`
 * - **Description**: Gallery
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GallerySlice = prismic.SharedSlice<'gallery', GallerySliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * title field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	title: prismic.KeyTextField;

	/**
	 * subtitle field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.subtitle
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	subtitle: prismic.KeyTextField;

	/**
	 * city field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.city
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	city: prismic.KeyTextField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<HeroSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>;

/**
 * Item in *Metodos → Default → Primary → Item*
 */
export interface MetodosSliceDefaultPrimaryItemItem {
	/**
	 * Metodo Name field in *Metodos → Default → Primary → Item*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: metodos.default.primary.item[].metodo_name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	metodo_name: prismic.KeyTextField;

	/**
	 * Metodo Color field in *Metodos → Default → Primary → Item*
	 *
	 * - **Field Type**: Color
	 * - **Placeholder**: *None*
	 * - **API ID Path**: metodos.default.primary.item[].metodo_color
	 * - **Documentation**: https://prismic.io/docs/field#color
	 */
	metodo_color: prismic.ColorField;
}

/**
 * Item in *Metodos → Default → Primary → Metodos*
 */
export interface MetodosSliceDefaultPrimaryMetodosItem {
	/**
	 * Name field in *Metodos → Default → Primary → Metodos*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: metodos.default.primary.metodos[].name
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	name: prismic.KeyTextField;

	/**
	 * Description field in *Metodos → Default → Primary → Metodos*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: metodos.default.primary.metodos[].description
	 * - **Documentation**: https://prismic.io/docs/field#rich-text-title
	 */
	description: prismic.RichTextField;

	/**
	 * Background field in *Metodos → Default → Primary → Metodos*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: metodos.default.primary.metodos[].background
	 * - **Documentation**: https://prismic.io/docs/field#image
	 */
	background: prismic.ImageField<never>;
}

/**
 * Primary content in *Metodos → Default → Primary*
 */
export interface MetodosSliceDefaultPrimary {
	/**
	 * Heading field in *Metodos → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: metodos.default.primary.heading
	 * - **Documentation**: https://prismic.io/docs/field#key-text
	 */
	heading: prismic.KeyTextField;

	/**
	 * Item field in *Metodos → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: metodos.default.primary.item[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	item: prismic.GroupField<Simplify<MetodosSliceDefaultPrimaryItemItem>>;

	/**
	 * Metodos field in *Metodos → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: metodos.default.primary.metodos[]
	 * - **Documentation**: https://prismic.io/docs/field#group
	 */
	metodos: prismic.GroupField<Simplify<MetodosSliceDefaultPrimaryMetodosItem>>;
}

/**
 * Default variation for Metodos Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MetodosSliceDefault = prismic.SharedSliceVariation<
	'default',
	Simplify<MetodosSliceDefaultPrimary>,
	never
>;

/**
 * Slice variation for *Metodos*
 */
type MetodosSliceVariation = MetodosSliceDefault;

/**
 * Metodos Shared Slice
 *
 * - **API ID**: `metodos`
 * - **Description**: Metodos
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type MetodosSlice = prismic.SharedSlice<'metodos', MetodosSliceVariation>;

declare module '@prismicio/client' {
	interface CreateClient {
		(
			repositoryNameOrEndpoint: string,
			options?: prismic.ClientConfig
		): prismic.Client<AllDocumentTypes>;
	}

	interface CreateWriteClient {
		(
			repositoryNameOrEndpoint: string,
			options: prismic.WriteClientConfig
		): prismic.WriteClient<AllDocumentTypes>;
	}

	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}

	namespace Content {
		export type {
			PageDocument,
			PageDocumentData,
			PageDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			SettingsDocumentDataNavItemItem,
			AllDocumentTypes,
			AboutSlice,
			AboutSliceDefaultPrimary,
			AboutSliceVariation,
			AboutSliceDefault,
			ContactoSlice,
			ContactoSliceDefaultPrimary,
			ContactoSliceVariation,
			ContactoSliceDefault,
			GallerySlice,
			GallerySliceDefaultPrimary,
			GallerySliceVariation,
			GallerySliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			MetodosSlice,
			MetodosSliceDefaultPrimaryItemItem,
			MetodosSliceDefaultPrimaryMetodosItem,
			MetodosSliceDefaultPrimary,
			MetodosSliceVariation,
			MetodosSliceDefault
		};
	}
}
