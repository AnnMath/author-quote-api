import quotes from '@/data/quotes.json'

export async function GET(request: Request) {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const { id, quote, book, author } = quotes[randomIndex]
  return new Response(JSON.stringify({ id, quote, book, author }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
