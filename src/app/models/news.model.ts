export function unmarshallerNews(json: any): News {
  const news = new News();
  news.author = json.author ? json.author : news.author;
  news.content = json.content ? json.content : news.content;
  news.description = json.description ? json.description : news.description;
  news.publishedAt = json.publishedAt ? new Date(json.publishedAt) : news.publishedAt;
  news.source = json.source ? json.source : news.source;
  const title: string = json.title ? json.title : '';
  const tokens = title.split(' - ');
  news.title = title;
  news.title = tokens.slice(0, -1).join(' - ');
  news.titleSrc = tokens[tokens.length - 1];
  news.url = json.url ? json.url : news.url;
  news.urlToImage = json.urlToImage ? json.urlToImage : news.urlToImage;
  news.updateRelativeSeconds();
  return news;
}

export class News {

  author = '';
  content = '';
  description = '';
  publishedAt: Date = new Date();
  source: {id: string|null, name: string} = {id: null, name: ''};
  title = '';
  titleSrc = '';
  url = '';
  urlToImage = '';

  noImage = false;
  relativeSeconds = 0;

  constructor() {

  }

  getRelativeSeconds() {
    return Math.floor(((new Date()).getTime() - this.publishedAt.getTime()) / 1000);
  }

  updateRelativeSeconds() {
    this.relativeSeconds = this.getRelativeSeconds();
  }
}


