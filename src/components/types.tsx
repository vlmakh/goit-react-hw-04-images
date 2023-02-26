export type LoadMoreType = {
  loadMore: () => void;
};

export type OnSumbitType = {
  onSubmit: (searchQuery: string) => void;
};

export type ImageType = {
  id: number;
  largeImageURL: string;
  webformatURL: string;
  tags: string;
};

export type ImagesType = {
  images: Array<ImageType>;
};
