// DietPlanScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DietPlanScreen = ({ route }) => {
  // Get the predicted calories from the route parameters
  const { predictedCalories } = route.params;

  // Determine the diet plan based on the calorie range
  const getDietPlan = () => {
    if (predictedCalories >= 5 && predictedCalories <= 20) {
      return 'Diet Plan A: Low Calorie Diet\n\n\n\n- Breakfast: Scrambled eggs with spinach and whole grain toast.\n\n- Snack: Greek yogurt with mixed berries.\n\n- Lunch: Grilled chicken salad with mixed greens, tomatoes, cucumbers, and vinaigrette dressing.\n\n- Snack: Apple slices with almond butter.\n\n- Dinner: Baked salmon with quinoa and roasted vegetables.';
    } else if (predictedCalories >= 21 && predictedCalories <= 50) {
      return 'Diet Plan B: Moderate Calorie Diet\n\n\n\n- Breakfast: Oatmeal topped with sliced bananas and almonds.\n\n- Snack: Carrot sticks with hummus.\n\n- Lunch: Turkey wrap with whole wheat tortilla, lettuce, tomato, avocado, and mustard.\n\n- Snack: Cottage cheese with pineapple chunks.\n\n- Dinner: Stir-fried tofu with mixed vegetables and brown rice.';
    } else if (predictedCalories >= 51 && predictedCalories <= 200) {
      return 'Diet Plan C: High Calorie Diet\n\n\n\n- Breakfast: Whole grain pancakes with berries and a side of scrambled eggs.\n\n- Snack: Handful of mixed nuts and dried fruits.\n\n- Lunch: Quinoa salad with chickpeas, diced bell peppers, cucumber, feta cheese, and lemon vinaigrette.\n\n- Snack: Greek yogurt with granola.\n\n- Dinner: Grilled shrimp skewers with roasted sweet potatoes and steamed broccoli.';
    } else if (predictedCalories >= 201 && predictedCalories <= 2500) {
      return 'Diet Plan D: Very High Calorie Diet\n\n\n\n- Breakfast: Avocado toast on whole grain bread with poached eggs and tomato slices.\n\n- Snack: Protein smoothie with banana, spinach, protein powder, and almond milk.\n\n- Lunch: Grilled steak salad with mixed greens, roasted beets, goat cheese, and balsamic vinaigrette.\n\n- Snack: Whole grain crackers with sliced cheese.\n- Dinner: Baked chicken breast with quinoa pilaf and sautéed green beans.';
    } else {
      return 'No specific diet plan available for this calorie range.';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diet Plan</Text>
      <Text style={styles.calories}>Predicted Calories: {predictedCalories}</Text>
      <Text style={styles.plan}>{getDietPlan()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:40,
    color:"green"
  },
  calories: {
    fontSize: 18,
    marginBottom: 20,
    marginTop:20,
    color:"green",
  },
  plan: {
    fontSize: 18,
    textAlign: 'center',
    color:"black",
    marginTop:20,
  },
});

export default DietPlanScreen;
