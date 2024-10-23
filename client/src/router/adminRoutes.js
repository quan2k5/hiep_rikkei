import AdminLayout from "@/layouts/admin/AdminLayout.vue";
import AdminCategories from "@/views/admin/AdminCategories/AdminCategories.vue";
import AdminDashboard from "@/views/admin/AdminDashboard.vue";
import AdminMessage from "@/views/admin/AdminMessage.vue";
import AdminProduct from "@/views/admin/AdminProduct/AdminProduct.vue";
import AdminProfile from "@/views/admin/AdminProfile.vue";
import AdminUi from "@/views/admin/AdminUi.vue";
import AdminUser from "@/views/admin/AdminUser/AdminUser.vue";

const adminRoutes = [
    {
        path: "/admin",
        redirect:"admin/dashboard",
        name: "adminDashboard",
        component: AdminLayout,
        children: [
            {
                path:"dashboard",
                component:AdminDashboard,
                name:"dashboard"
            },
            {
                path:"user",
                component:AdminUser,
                name:"user"
            },
            {
                path:"categories",
                component:AdminCategories,
                name:"categories"
            },
            {
                path:"product",
                component:AdminProduct,
                name:"product"
            },
            {
                path:"message",
                component:AdminMessage,
                name:"message"
            },
            {
                path:"ui",
                component:AdminUi,
                name:"ui"
            },
            {
                path:"profile",
                component:AdminProfile,
                name:"profile"
            },
        ]
    },
     
]

export default adminRoutes;