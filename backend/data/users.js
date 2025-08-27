import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'John@example.com',
    password: bcrypt.hashSync('1234', 10),
  },
  {
    name: 'John Doe',
    email: 'Jane@example.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
