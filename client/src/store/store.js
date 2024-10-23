import { createStore } from "vuex";
import user from "./module/user.module";
import product from "./module/product.module";
import category from "./module/category.module";

const store = createStore({
    // shorthand 
    modules:{
        user, 
        product,
        category,
    }

})
export default store;

