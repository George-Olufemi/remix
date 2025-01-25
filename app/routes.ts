import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("post/:postId", "routes/post.tsx"),

  //Nested routers
  layout("./routes/dashboard/admin.tsx", [
    ...prefix("admin", [
      route("overview", "./routes/dashboard/overview.tsx"),
      route("finances", "./routes/dashboard/finances.tsx"),
      route("profile", "./routes/dashboard/profile.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
