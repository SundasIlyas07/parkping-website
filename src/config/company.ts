/**
 * CodeBrainix Company Configuration & Attribution Details
 *
 * ParkPing is developed by CodeBrainix.
 * Official website: https://codebrainix.dev
 * Email: info@codebrainix.dev
 */

export interface CompanySocialConfig {
  /** Configurable LinkedIn profile URL. Update with exact official profile URL when provided. */
  linkedin: string;
  /** Configurable Instagram profile URL. Update with exact official profile URL when provided. */
  instagram: string;
}

export interface CompanyConfig {
  name: string;
  website: string;
  email: string;
  attributionText: string;
  creditText: string;
  supportingText: string;
  social: CompanySocialConfig;
}

export const CODEBRAINIX_CONFIG: CompanyConfig = {
  name: 'CodeBrainix',
  website: 'https://codebrainix.dev',
  email: 'info@codebrainix.dev',
  attributionText: 'ParkPing is proudly developed by CodeBrainix.',
  creditText: 'Built by CodeBrainix',
  supportingText: 'Technology and product engineering behind ParkPing.',
  social: {
    // Configurable placeholders for CodeBrainix official social profiles.
    // Insert exact official URLs here once verified from official documentation.
    linkedin: 'https://linkedin.com/company/codebrainix', // PLACEHOLDER: Insert official CodeBrainix LinkedIn URL here
    instagram: 'https://instagram.com/codebrainix',       // PLACEHOLDER: Insert official CodeBrainix Instagram URL here
  },
};
