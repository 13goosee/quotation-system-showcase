const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('.'));
app.use(express.json());

// --- Quotation CRUD ---

app.get('/api/quotations', (req, res) => {
  res.json({ quotations: [] });
});

app.get('/api/quotations/:id', (req, res) => {
  res.json({ data: {}, share: null });
});

app.post('/api/quotations', (req, res) => {
  res.json({ id: 'q_demo', message: 'created' });
});

app.put('/api/quotations/:id', (req, res) => {
  res.json({ message: 'saved' });
});

// --- AI Quotation Generation ---

app.post('/api/ai/start', (req, res) => {
  // Step 1: AI asks clarifying questions about the project
  res.json({
    questions: [
      'What deliverables does the client expect?',
      'What is the project timeline?',
      'Does the client need print production management?'
    ]
  });
});

app.post('/api/ai/generate', (req, res) => {
  // Step 2: AI generates quotation items based on answers
  res.json({
    items: [
      { name: 'LOGO設計', price: 65000 },
      { name: '名片設計', price: 22000 },
      { name: '信封設計', price: 15000 },
      { name: '制服設計', price: 25000 },
      { name: '樣本包裝設計', price: 35000 }
    ]
  });
});

// --- Client Sharing ---

app.post('/api/quotations/:id/share', (req, res) => {
  res.json({ token: 'share_demo', url: '/client/view/share_demo' });
});

// --- Client Signature ---

app.get('/client/view/:token', (req, res) => {
  res.sendFile(__dirname + '/sign.html');
});

app.post('/api/client/:token/sign', (req, res) => {
  // Client submits signature (base64 PNG from canvas)
  const { signature, signer_name, company, email, phone, address } = req.body;
  res.json({ message: 'signed', locked: true });
});

// --- PDF Generation ---

app.get('/api/quotations/:id/pdf', (req, res) => {
  // Puppeteer renders HTML to A4 PDF with traditional Chinese typography
  res.json({ message: 'pdf_generated' });
});

app.listen(PORT, () => {
  console.log(`Quotation system running on port ${PORT}`);
});
