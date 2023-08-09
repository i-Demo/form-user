import FormUser from "~/pages/FormUser";

// Public Routes
const publicRoutes = [
    { path: "/", element: <FormUser /> },
];
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
