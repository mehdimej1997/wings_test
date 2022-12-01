export const getPosts = async () => {
  try {
    const req = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (req.ok) {
      const data = await req.json();
      return data;
    } else {
      throw new Error(req.status);
    }
  } catch (error) {
    throw new Error(error);
  }
};
