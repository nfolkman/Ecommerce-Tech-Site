import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client = sanityClient({
   projectId: 'm0cdb6c5',
   dataset: 'production',
   apiVersion: '2022-03-10',
   userCdn: true,
   token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
