import Message from "../models/Message";
import Post from "../models/Post";

let postApiUrl = "https://api.imgflip.com/get_memes";

export const getPostList = async () => {
  let msg = new Message();
  msg.result = [];

  return fetch(postApiUrl)
    .then((res) => res.json())
    .then((res) => {
      if (!res?.success) {
        msg.result = [];
        msg.message = "Failed!";
      } else {
        for (let i = 0; i < res?.data?.memes?.length; i++) {
          let post = new Post(res?.data?.memes[i]);
          msg.result.push(post);
        }
        msg.message = "Successfully!";
      }
      return { result: msg.result, message: msg.message };
    })
    .catch((error) => {
      msg.result = [];
      msg.message = `${error.message}`;
      return { result: msg.result, message: msg.message };
    });
};
