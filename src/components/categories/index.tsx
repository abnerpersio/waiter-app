import { FlatList } from 'react-native';
import { Category } from '../../types/category';
import { AppText } from '../text';
import { CategoryContainer, Container, IconContainer, styles } from './styles';

type Props = {
  categories: Category[];
  disabled?: boolean;
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
};

export function Categories(props: Props) {
  const { categories, disabled, selectedCategory, onSelectCategory } = props;

  if (!categories.length) {
    return null;
  }

  return (
    <Container>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
        keyExtractor={(category) => category._id}
        renderItem={({ item: category }) => {
          const isSelected = selectedCategory === category._id;

          return (
            <CategoryContainer
              hitSlop={4}
              disabled={disabled}
              onPress={() => onSelectCategory(category._id)}
              key={category._id}
            >
              <IconContainer>
                <AppText opacity={isSelected ? 1 : 0.5}>{category.icon}</AppText>
              </IconContainer>

              <AppText opacity={isSelected ? 1 : 0.5} size={14} weight="600">
                {category.name}
              </AppText>
            </CategoryContainer>
          );
        }}
      />
    </Container>
  );
}
