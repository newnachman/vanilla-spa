const fetchPost = async (id = "") => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if (!response.ok) {
    return { error: true}
  } else {
    return data;
  }

} 

export default fetchPost;
