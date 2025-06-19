export const SITE = {
  website: "https://yukired.github.io/", // replace this with your deployed domain, e.g. https://ziteh.github.io/
  author: "YukiRed", // 君の名は ~
  profile: "https://github.com/YukiRed",
  desc: "A blog of thoughts, explorations, and creative reflections.",
  title: "Digital Notes",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  postPerArchive: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  genDescriptionMaxLines: 30, // Max number of lines to process
  genDescriptionCount: 200, // If 'more' tag is not found, use this count of characters
  showArchives: true,
  showBackButton: false, // show back button in post detail
  showPageDesc: false, // show page description in post detail
  editPost: {
    enabled: false,
    text: "Suggest Changes",
    url: "https://github.com/YukiRed/blog/edit/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  langOg: "en_US", // Open Graph locale tag, format 'language_TERRITORY' https://ogp.me/#optional
  timezone: "Asia/Kuching", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
  wontonCommentUrl: "", // Wonton comment server URL, set to empty string to disable comment
} as const;
