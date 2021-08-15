import axios from "axios";

const queryAPI = (input) => {
  return axios
    .get("https://www.googleapis.com/books/v1/volumes", {
      params: {
        key: "AIzaSyBxYsRC2RkOQGMr0yfr0nV5cgwxYQtSQ3c",
        
        orderBy: "relevance",
        maxResults: 20,
        fields:
          "totalItems,items(volumeInfo(title,authors,imageLinks/thumbnail,infoLink,publisher))",
      },
      timeout: 5000,
    })
    .then((res) => {
      let {
        data: { items, totalItems },
      } = res;
      let result = totalItems > 0 ? items : [];
      console.log(result);
      return res;
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "ECONNABORTED") {
        errorFn("The search request took too long - please try again later.");
      } else {
        let { message } = err.response.data.error;
        console.log(message);
      }
      return err;
    });
};

export default queryAPI;
