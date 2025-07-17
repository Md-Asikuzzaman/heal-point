export function getPublicIdFromUrl(url: string): string | null {
  try {
    const parts = url.split("/");
    const folder = parts[parts.length - 2];
    const filename = parts[parts.length - 1];
    const publicId = filename.substring(0, filename.lastIndexOf("."));
    return `${folder}/${publicId}`;
  } catch {
    return null;
  }
}
