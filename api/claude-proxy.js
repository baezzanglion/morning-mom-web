// Vercel Function — Claude API 프록시
// 워크숍 참가자 5명에게 *API 키 없이* ON마음 OS 사용권 제공
// 환경변수 ANTHROPIC_API_KEY는 Vercel 대시보드에서 설정

export default async function handler(req, res) {
  // CORS (모든 origin 허용 — 워크숍 5명에게 URL 직접 공유라 OK)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Method not allowed' } });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: {
        message: 'ANTHROPIC_API_KEY 환경변수가 설정되지 않았습니다. Vercel 대시보드에서 설정해주세요.',
      },
    });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({
      error: { message: '프록시 오류: ' + (err.message || String(err)) },
    });
  }
}
