export default {
  getAll: () => {
    const posts = ((ctx) => {
      const keys = ctx.keys();
      const values = keys.map(ctx);
      const data = keys.map((key, index) => {
        const slug = key
          .replace(/^.*[\\\/]/, "")
          .split(".")
          .slice(0, -1)
          .join(".");
        const value = values[index];
        const document = value;
        return {
          document,
          slug,
        };
      });
      return data;
    })(require.context("../content/posts", true, /\.md$/));
    return { posts };
  },
};
