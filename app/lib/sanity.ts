import {createClient} from "next-sanity";

export const client = createClient({
  projectId: "yg27ou9t",
  dataset: "production",
  apiVersion: '2022-03-25',
  useCdn: true,
})

