export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;
    const image = req.files.image; // Handle file upload
    console.log('Feedback:', text, image ? 'Image uploaded' : 'No image');
    res.status(200).json({ message: 'Feedback received' });
  }
}