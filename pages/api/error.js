export default function handler(req, res) {
    res.status(404).json({ text: 'Page Not found!' });
}
