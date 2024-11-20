app.get('/api/test', async (req, res) => {
  try {
    const testUser = {
      username: 'testuser',
      email: 'testuser@example.com',
      phone: '1234567890',
      gender: 'Male',
      password: 'testpassword',
    };

    const newUser = new User(testUser);
    await newUser.save();
    res.status(200).json({ message: 'Test user added successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding test user', details: error.message });
  }
});
