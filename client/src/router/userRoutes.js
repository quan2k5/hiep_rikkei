import UserLayout from "@/layouts/user/UserLayout.vue";
// import  UserLayout from "@/layouts/user/UserLayout.vue";
import Account from "@/views/user/Account.vue";
import Address from "@/views/user/Address.vue";
import Cart from "@/views/user/Cart.vue";
import ChangePassword from "@/views/user/ChangePassword.vue";
import HistoryOrder from "@/views/user/HistoryOrder.vue";
import Home from "@/views/user/Home.vue";
import Profile from "@/views/user/Profile.vue";
import UserPrivate from "@/views/user/UserPrivate.vue";
import WishList from "@/views/user/WishList.vue";

const userRoutes = [
  {
    path: "/",
    component: UserLayout,
    children: [
      {
        path: "",
        component: Home,
      },
      {
        path: "user",
        redirect: "user/account",
        component: UserPrivate,
        children: [
          {
            path: "cart",
            component: Cart,
          },
          {
            path: "account",
            component: Account,
            children: [
              {
                path: "profile",
                name: "profile",
                component: Profile,
              },
              {
                path: "change-password",
                name: "change-password",
                component: ChangePassword,
              },
              {
                path: "address",
                name: "address",
                component: Address,
              },
              {
                path: "wish-list",
                name: "wish-list",
                component: WishList,
              },
              {
                path: "history-order",
                name: "history-order",
                component: HistoryOrder,
              },
            ],
          },
        ],
      },
    ],
  },
];


export default userRoutes;


