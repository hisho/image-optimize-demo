const BROWSER_SYNC = {
  files: [
    `docs/assets/**/*`,
    `docs/**/*.html`,
  ],
  ghostMode: {
    clicks: false,
    scroll: false,
    forms: false
  },
  server: {
    baseDir: 'dist',
    middleware: [],
  },
  logFileChanges: false
};

module.exports = BROWSER_SYNC;
