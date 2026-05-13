export const SITE = {
  website: "https://example.com/",  // deploy 后再改
  author: "Michael Dong",
  profile: "https://github.com/MichaelDong0819",
  desc: "CS & Data Science @ University of Sydney. Systems, databases, and building things that actually run.",
  title: "Michael Dong",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
  postPerIndex: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true,
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "en",
  timezone: "Australia/Sydney",
} as const;