/**
 * Home Money Release Configuration
 *
 * Single source of truth for APK versioning, file metadata, release notes,
 * and developer support URLs.
 *
 * APK binaries are distributed via GitHub Releases to respect repository file limits.
 *
 * When publishing a new release:
 * 1. Build your new release APK: Home-Money-vX.Y.Z.apk
 * 2. Create a GitHub Release tag (e.g. `v1.0.1`) on https://github.com/Humam1122/home-money-website/releases
 * 3. Upload the APK file as a release asset named `Home-Money-vX.Y.Z.apk`
 * 4. Update `CURRENT_RELEASE` below
 * 5. Commit and deploy
 */

export interface AppRelease {
  version: string;
  versionCode: number;
  releaseDate: string;
  apkFileName: string;
  apkFileSize: string;
  apkExpectedBytes: number;
  apkDownloadPath: string;
  apkStreamingApiPath: string;
  githubReleaseUrl: string;
  packageName: string;
  minAndroidVersion: string;
  targetAndroidVersion: string;
  license: string;
  githubRepoUrl: string;
  githubMobileAppRepoUrl: string;
  changelog: string[];
}

export const CURRENT_RELEASE: AppRelease = {
  version: 'v1.0.0',
  versionCode: 1,
  releaseDate: 'September 2026',
  apkFileName: 'Home-Money-v1.0.0.apk',
  apkFileSize: '102.3 MB',
  apkExpectedBytes: 107257762,
  apkDownloadPath:
    'https://github.com/Humam1122/home-money-website/releases/download/v1.0.0/Home-Money-v1.0.0.apk',
  apkStreamingApiPath: '/api/download',
  githubReleaseUrl:
    'https://github.com/Humam1122/home-money-website/releases/tag/v1.0.0',
  packageName: 'com.homemoney.app',
  minAndroidVersion: 'Android 8.0+ (Oreo or later)',
  targetAndroidVersion: 'Android 14 / 15',
  license: 'MIT',
  githubRepoUrl: 'https://github.com/Humam1122/home-money-website',
  githubMobileAppRepoUrl: 'https://github.com/Humam1122/Home-Money-Mobile-App',
  changelog: [
    'Initial public release for Android',
    'Month-isolated expense ledger with zero bleed between months',
    'Fast single and multi-item receipt splitting across categories',
    'Smart keyword-based category auto-detection',
    'Recurring bills tracking with paid/due-soon indicators',
    'Monthly and category-specific budget progress limits',
    'Print-ready monthly PDF reports & CSV export',
    '100% offline-ready embedded SQLite database',
  ],
};

/**
 * Buy Me a Coffee / Support Developer URL.
 * Set your public Buy Me a Coffee or Ko-fi URL here or via environment variable.
 * When left empty, the UI displays an optional contribution card with preset tiers
 * and clearly indicates that donation link integration is coming soon.
 * Example: 'https://buymeacoffee.com/yourname'
 */
export const BUY_ME_A_COFFEE_URL: string =
  process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL ?? '';
