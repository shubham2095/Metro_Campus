import { Link } from 'react-router'
import PageBanner from '../../components/common/PageBanner'

export default function NotFound() {
  return (
    <>
      <PageBanner title="Page Not Found" subtitle="The page you are looking for doesn't exist or has moved." />
      <div className="py-20 text-center">
        <Link to="/" className="btn-ghost">Back to Home</Link>
      </div>
    </>
  )
}
