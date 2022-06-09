export default function Footer({ copyright }) {
  return (
    <footer className="px-8 py-6 bg-emerald-500 text-black">
      <p>&copy;{copyright}</p>
    </footer>
  )
}