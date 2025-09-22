# Environment Variables Setup

## Google Analytics Configuration

To enable Google Analytics on your site, you need to set up the following environment variable:

### 1. Get your GA4 Measurement ID

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property or use an existing one
3. Go to Admin → Data Streams → Web
4. Copy your Measurement ID (format: `G-XXXXXXXXXX`)

### 2. Set Environment Variable

#### For Local Development:
Create a `.env.local` file in your project root:
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### For Production (Vercel):
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add:
   - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - **Value**: `G-XXXXXXXXXX` (your actual measurement ID)
   - **Environment**: Production (and Preview if desired)

### 3. Deploy

After setting the environment variable, redeploy your site. Google Analytics will automatically start tracking.

## Privacy Considerations

- The current setup respects user privacy by only loading GA when the measurement ID is provided
- Consider adding a cookie consent banner for GDPR compliance
- GA4 is more privacy-focused than Universal Analytics

## Testing

- Check browser developer tools → Network tab for GA requests
- Use Google Analytics Real-time reports to verify tracking
- Test in incognito mode to avoid cached data
