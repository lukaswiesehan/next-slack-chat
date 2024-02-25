type User = {
  id: string
  presence: 'active' | 'away'
  image: string
  name: string
  role: string
  status?: string
}
