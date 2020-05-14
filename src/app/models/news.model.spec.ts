import { News, unmarshallerNews } from './news.model';

describe('News', () => {
  it('should create an instance', () => {
    expect(new News()).toBeTruthy();
  });

  it('test unmarshallerNews', () => {
    const json = {
      source: {
        id: 'les-echos',
        name: 'Les Echos'
      },
      author: 'Les Echos',
      title: 'EN DIRECT - Coronavirus : le gouvernement appelle à la « responsabilité » sur les rassemblements dans les lieux privés - Les Échos',
      description: 'Le secrétaire d\'Etat à l\'Intérieur Laurent Nunez a appelé les Français au « bon sens » et à la « responsabilité », après que le Conseil constitutionnel a censuré l\'interdiction des rassemblements de plus de dix personnes dans les lieux privés.',
      url: 'https://www.lesechos.fr/monde/enjeux-internationaux/en-direct-le-14-mai-coronavirus-le-point-sur-la-situation-en-france-et-dans-le-monde-1202769',
      urlToImage: 'https://media.lesechos.com/api/v1/images/view/5ebd02858fe56f75d36354c5/1280x720/0603240582861-web-tete.jpg',
      publishedAt: '2020-05-14T08:38:30Z',
      content: 'Quatrième jour de déconfinement en France, où la levée des mesures se poursuit. Après la réouverture de plus de 400.000 commerces, de certaines plages et même de Lourdes, au tour des écoles parisiennes, lilloises ou lyonnaises de faire leur rentrée ce jeudi.\r… [+14979 chars]'
    };
    const news = unmarshallerNews(json);
    expect(news).toBeTruthy();
    expect(news.source).toEqual(json.source);
    expect(news.title + ' - ' + news.titleSrc).toEqual(json.title);
    expect(news.author).toEqual(json.author);
    expect(news.description).toEqual(json.description);
    expect(news.url).toEqual(json.url);
    expect(news.urlToImage).toEqual(json.urlToImage);
    expect(news.publishedAt.getTime()).toEqual((new Date(json.publishedAt)).getTime());
    expect(news.content).toEqual(json.content);
  });

  it('test unmarshallerNews title formater', () => {
    const news = unmarshallerNews({
      title: 'Test - France 3'
    });
    expect(news).toBeTruthy();
    expect(news.title).toEqual('Test');
    expect(news.titleSrc).toEqual('France 3');
  });

  it('getRelativeSeconds', () => {
    const date = new Date();
    date.setHours(date.getHours() - 2);
    const news = unmarshallerNews({
      title: 'Test - France 3',
      publishedAt: date
    });
    expect(news).toBeTruthy();
    expect(news.getRelativeSeconds()).toEqual(3600 * 2);
    news.updateRelativeSeconds();
    expect(news.relativeSeconds).toEqual(3600 * 2);
  });

});
