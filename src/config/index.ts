import { createClient } from "next-sanity";

const SANITY_TOKEN =
  "skmszayg3HRT5d2b6gGTeQYGFjCLwTyGnKCWrxwUKn4TZho8sVyDiIUsythq1TVm0kO1nnJ4hKYdA8c02ztk4OcQHhx39X1rQOfgCbjHZSNZmBcbO0W5ZmmHPDg7uxT8jipYo0XjzqPL353P4vaGbty2ExYC8cGT90K8qye779TaKiTzvtSp";

export const sanityClient = createClient({
  projectId: "8yw6ipl4",
  dataset: "production",
  apiVersion: "2023-11-23",
  useCdn: false,
  token: SANITY_TOKEN,
});
