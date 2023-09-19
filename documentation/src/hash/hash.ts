const password = "super-secure-pa$$word";

const hash = await Bun.password.hash(password);
// => $argon2id$v=19$m=65536,t=2,p=1$tFq+9AVr1bfPxQdh6E8DQRhEXg/M/SqYCNu6gVdRRNs$GzJ8PuBi+K+BVojzPfS5mjnC8OpLGtv8KJqF99eP6a4

const isMatch = await Bun.password.verify(password, hash);
// => true

const password2 = "super-secure-pa$$word";

// use argon2 (default)
const argonHash = await Bun.password.hash(password2, {
  algorithm: "argon2id", // "argon2id" | "argon2i" | "argon2d"
  memoryCost: 4, // memory usage in kibibytes
  timeCost: 3, // the number of iterations
});

// use bcrypt
const bcryptHash = await Bun.password.hash(password2, {
  algorithm: "bcrypt",
  cost: 4, // number between 4-31
});
