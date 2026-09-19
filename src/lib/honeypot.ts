const HONEYPOT_FRAGMENTS = [
  "wp-admin",
  "wp-login",
  "wp-content",
  "wp-json",
  "xmlrpc.php",
  "phpmyadmin",
  "pma",
  ".env",
  ".git",
  ".aws",
  "config.php",
  "administrator",
  "admin.php",
  "cpanel",
  "webadmin",
  "manager/html",
  "actuator",
  "shell.php",
  "eval-stdin",
  "cgi-bin",
  "vendor/.env",
  "backup.sql",
  ".ssh",
] as const;

export function isHoneypotPath(pathname: string): boolean {
  const lower = pathname.toLowerCase();
  return HONEYPOT_FRAGMENTS.some((fragment) => lower.includes(fragment));
}
