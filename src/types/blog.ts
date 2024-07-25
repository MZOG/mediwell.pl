export type TypeBlogPost = {
  attributes: {
    Title: string;
    Content: string;
    createdAt: string;
    post_categories: {
      data: {
        attributes: {
          name: string;
        };
      }[];
    };
    Image: {
      data: {
        attributes: {
          width: number;
          height: number;
          formats: {
            small: {
              url: string;
            };
          };
        };
      };
    };
  };
};
