export default function Home({ org }) {
  return (
    <div>
      <h1>{org.login}</h1>
      <h3>{org.description}</h3>

      <p>Site: <a href={org.blog}>{org.blog}</a></p>
    </div>
  )
}

export const getStaticProps = async () => {
  const response = await fetch('https://api.github.com/orgs/rocketseat');
  const data = await response.json();
  
  return {
    props: {
      org: data,
    }
  }
}
