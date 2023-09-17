import axios from "axios";
const createNote = async (questionId, userId, content, topicId) => {
    const token = localStorage.getItem("token");
    const data = await axios.post(
      "/api/notes/createnote",
      {
        questionId: questionId,
        userId: userId,
        content: content,
        topicId: topicId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  };

  export {createNote};