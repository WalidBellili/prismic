import * as prismic from "@prismicio/client";

export const blog = "WeeklyWalid";

export const client = prismic.createClient(blog, {
  accessToken: "",

  routes: [],
});
