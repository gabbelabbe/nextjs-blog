export async function getGithubData() {
  const res = await fetch('https://api.github.com/users/gabbelabbe/repos')
  return await res.json()
}