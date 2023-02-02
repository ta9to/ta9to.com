export function formatDate(dateString) {
  return new Date(`${dateString}`).toLocaleDateString('ja-JP', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Tokyo',
  })
}
