export default function Footer({ onPalette }) {
  return (
    <footer>
      <span>© 2026 Ethan Brockman — designed &amp; built by hand</span>
      <span>
        Press{' '}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            onPalette()
          }}
        >
          ⌘K
        </a>{' '}
        · contours generated live
      </span>
    </footer>
  )
}
