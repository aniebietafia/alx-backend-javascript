import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classrooms = [];
  const sizes = [19, 20, 34];

  for (let i = 0; i < sizes.length; i += 1) {
    classrooms.push(new ClassRoom(sizes[i]));
  }
  return classrooms;
}
