class Post {
    constructor(
      id,
      title,
      content,
      date,
      userId,
      topic_id
    ) {
      this.id = id;
      this.title = title;
      this.content = content;
      this.date=date;
      this.userId = userId;
      this.topic_id = topic_id;
    }
  }
  
  export default Post;