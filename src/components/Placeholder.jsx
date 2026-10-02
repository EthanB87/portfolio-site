// Marks content Ethan still needs to supply. Shows in `npm run dev` only, so nothing
// unfinished reaches the live site. Search the code for <Placeholder to find them all.
export default function Placeholder({ children }) {
  if (!import.meta.env.DEV) return null
  return (
    <div className="placeholder" role="note">
      <strong>Placeholder (dev only):</strong> {children}
    </div>
  )
}
