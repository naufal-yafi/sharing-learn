const player: { level: number; health: number; banned: boolean } = {
  level: 45,
  health: 100,
  banned: false,
};

// type alias untuk user
type User = {
  username: string;
  password: string;
  age?: number; // optional parameter, artinya tidak wajib ada atau diisi
};

const user: User = {
  username: 'naufal',
  password: '12321312hhduhshjsajdnasd',
  age: 12,
};
