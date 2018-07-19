import axios from "axios";

export default {
    // get all books
    getArticles: function() {
        return axios.get("/api/articles");
    },
    // Gets the book with the given id
    getArticle: function(id) {
        return axios.get("/api/articles/" + id);
    },
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
};