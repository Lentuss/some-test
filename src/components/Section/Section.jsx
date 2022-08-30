import { ArticleContainer, Article, Picture } from './Section.styled';

const Section = () => {
  return (
    <ArticleContainer>
      <Article>
        <Picture
          src="https://images.pexels.com/photos/2441454/pexels-photo-2441454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="img"
        />
      </Article>
    </ArticleContainer>
  );
};

export default Section;
