import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user/user.repository';
import { Article } from '../article/article.entity';

@Injectable()
export class RosterService {
  constructor(private readonly userRepository: UserRepository) {}

  async getRoster() {
    const users = await this.userRepository.findAllWithArticles();
    const userStats = users.map(user => {
      const articles: Article[] = user.articles.getItems(); // Convert Collection to array
      return {
        username: user.username,
        totalArticles: articles.length,
        totalFavorites: articles.reduce((acc: number, article: Article) => acc + article.favoritesCount, 0),
        firstArticleDate: articles.length ? articles[0].createdAt : null,
      };
    });
    return userStats;
  }
}