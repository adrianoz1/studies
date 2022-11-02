
interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {
  return (
    <p>
      contagem: {props.count}
    </p>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/pools/count")
  const data = await response.json()

  console.log(data)

  return {
    props: { count: data.count }
  }
}
