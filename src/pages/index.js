import Default from "../componets/layouts/default"
import Script from 'next/script'

export default function Index() {
  return (
    'oi'
  )
}
Index.getLayout = function getLayout(page) {
  return (
    <Default> 
      {page}
    </Default>
  )
}