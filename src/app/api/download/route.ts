import { CURRENT_RELEASE } from '@/config/release';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

/**
 * Proxy streaming route for GitHub Release APK assets.
 * Allows client-side fetch() with ReadableStream to calculate exact progress
 * without encountering browser CORS blocks from GitHub Releases.
 */

async function fetchReleaseAsset() {
  const targetUrl = CURRENT_RELEASE.apkDownloadPath;

  const upstreamRes = await fetch(targetUrl, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      Accept: 'application/vnd.android.package-archive,application/octet-stream,*/*',
    },
    redirect: 'follow',
    cache: 'no-store',
  });

  return upstreamRes;
}

export async function GET() {
  try {
    const upstreamRes = await fetchReleaseAsset();

    if (!upstreamRes.ok || !upstreamRes.body) {
      return new Response(
        JSON.stringify({
          error: 'Failed to stream release asset from GitHub',
          status: upstreamRes.status,
          directUrl: CURRENT_RELEASE.apkDownloadPath,
        }),
        {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const contentLength =
      upstreamRes.headers.get('content-length') ||
      String(CURRENT_RELEASE.apkExpectedBytes);

    return new Response(upstreamRes.body, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Length': contentLength,
        'Content-Disposition': `attachment; filename="${CURRENT_RELEASE.apkFileName}"`,
        'Cache-Control': 'public, max-age=86400',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'Content-Length, Content-Disposition',
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(
      JSON.stringify({
        error: message,
        directUrl: CURRENT_RELEASE.apkDownloadPath,
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}

export async function HEAD() {
  try {
    const upstreamRes = await fetchReleaseAsset();
    const contentLength =
      upstreamRes.headers.get('content-length') ||
      String(CURRENT_RELEASE.apkExpectedBytes);

    return new Response(null, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
        'Content-Length': contentLength,
        'Content-Disposition': `attachment; filename="${CURRENT_RELEASE.apkFileName}"`,
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Expose-Headers': 'Content-Length, Content-Disposition',
      },
    });
  } catch {
    return new Response(null, { status: 500 });
  }
}
