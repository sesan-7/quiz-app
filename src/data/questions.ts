import type { Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    id: 'q1',
    text: '1. What sound does a cat make?',
    options: [
      { id: 'a', text: 'Bhau-Bhau' },
      { id: 'b', text: 'Meow-Meow', correct: true },
      { id: 'c', text: 'Oink-Oink' }
    ]
  },
  {
    id: 'q2',
    text: '2. What would you probably find in your fridge?',
    options: [
      { id: 'a', text: 'Shoes' },
      { id: 'b', text: 'Ice Cream', correct: true },
      { id: 'c', text: 'Books' }
    ]
  },
  {
    id: 'q3',
    text: '3. What color are bananas?',
    options: [
      { id: 'a', text: 'Blue' },
      { id: 'b', text: 'Yellow', correct: true },
      { id: 'c', text: 'Red' }
    ]
  },
  {
    id: 'q4',
    text: '4. How many stars are in the sky?',
    options: [
      { id: 'a', text: 'Two' },
      { id: 'b', text: 'Infinite', correct: true },
      { id: 'c', text: 'One Hundred' }
    ]
  }
];
