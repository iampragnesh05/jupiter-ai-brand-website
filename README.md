# Jupiter AI - Vertical AI for Indian Businesses

A premium Next.js website for Jupiter AI, featuring glassmorphism futuristic UI, lead capture forms, and AI product showcases.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: Supabase
- **Email**: Resend
- **Animation**: Framer Motion
- **Deployment**: Vercel

## Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Resend account (for email notifications)

## Environment Setup

1. Copy the environment template:
   ```bash
   cp .env.local.example .env.local
   ```

2. Fill in your environment variables in `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
   ```

## Database Schema

Create a `leads` table in Supabase with the following columns:

| Column | Type | Nullable |
|--------|------|----------|
| id | uuid | No (Primary Key) |
| form_type | text | Yes |
| source_page | text | Yes |
| name | text | Yes |
| email | text | Yes |
| business_name | text | Yes |
| website | text | Yes |
| industry | text | Yes |
| message | text | Yes |
| metadata | jsonb | Yes |
| created_at | timestamptz | Yes |

## Local Development

Install dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Production Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `RESEND_API_KEY`
4. Deploy!

### Build Locally

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   ├── leads/        # Lead submission API
│   │   ├── waitlist/     # Waitlist API
│   │   └── jupiter-build/# Idea submission API
│   ├── (pages)/          # Page routes
│   └── layout.tsx        # Root layout
├── components/
│   ├── sections/         # Page sections
│   ├── layout/          # Header, Footer
│   └── jupiter-*/       # Product-specific components
├── lib/
│   └── supabase.ts      # Supabase client
└── app/globals.css      # Global styles
```

## Form Submissions

All forms submit to the centralized `/api/leads` endpoint:

- **Contact Page**: `formType: 'contact-page'`
- **Jupiter Rank Demo**: `formType: 'jupiter-rank-demo'`
- **Jupiter Build Contact**: `formType: 'jupiter-build-contact'`

Email notifications are sent automatically via Resend.

## Troubleshooting

### Build Errors
- Ensure all environment variables are set
- Run `npm install` to update dependencies
- Check TypeScript with `npx tsc --noEmit`

### API Errors
- Verify Supabase connection and RLS policies
- Check Resend API key is valid
- Review server logs in Vercel dashboard

### Form Submission Issues
- Check browser console for fetch errors
- Verify `/api/leads` endpoint is accessible
- Review Supabase table permissions

## Support

For issues or questions, contact: info@jupiter-ai.co
