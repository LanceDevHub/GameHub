import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api/",
    params: {
        key: "ea24fe81e90548f4bcac31ac830431a4"
    }
})
